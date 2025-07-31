from pathlib import Path

GITIGNORE_PATH = Path(".gitignore")
PRETTIERIGNORE_PATH = Path(".prettierignore")

START_MARKER = "# AUTO-SYNCED FROM .gitignore START"
END_MARKER = "# AUTO-SYNCED FROM .gitignore END"


def read_lines(path):
    out = []
    if path.exists():
        with open(path, mode="r", encoding="utf-8") as f:
            out = [line.strip() for line in f.readlines()]
    return out


def write_lines(path, lines):
    with open(path, mode="w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")


def sync_gitignore_to_prettierignore():
    gitignore_lines = read_lines(GITIGNORE_PATH)
    prettierignore_lines = read_lines(PRETTIERIGNORE_PATH)

    # Filter valid gitignore entries (ignore empty lines and comments)
    synced_entries = [
        line
        for line in gitignore_lines
        if line.strip() and not line.strip().startswith("#")
    ]

    # Remove old auto-synced block if it exists
    if START_MARKER in prettierignore_lines and END_MARKER in prettierignore_lines:
        start = prettierignore_lines.index(START_MARKER)
        end = prettierignore_lines.index(END_MARKER)
        prettierignore_lines = (
            prettierignore_lines[:start] + prettierignore_lines[end + 1 :]
        )

    # Append synced block
    synced_block = [START_MARKER] + synced_entries + [END_MARKER]
    prettierignore_lines.append("")
    prettierignore_lines.extend(synced_block)

    write_lines(PRETTIERIGNORE_PATH, prettierignore_lines)
    print(f"✅ Synced {len(synced_entries)} entries from .gitignore to .prettierignore")


if __name__ == "__main__":
    sync_gitignore_to_prettierignore()
