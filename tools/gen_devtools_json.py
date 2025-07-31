import json
import os
import uuid
from pathlib import Path


def generate_devtools_json():
    root_dir = os.getcwd()
    file_path = Path(root_dir).joinpath(
        "public/.well-known/appspecific/com.chrome.devtools.json"
    )
    content = {
        "workspace": {
            "root": root_dir,
            "uuid": str(uuid.uuid4()),
        }
    }

    try:
        file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(content, f, indent=4)
        print("✅ Generated com.chrome.devtools.json")
    except Exception as e:
        print(f"❌ Failed to write devtools file: {e}")


if __name__ == "__main__":
    generate_devtools_json()
