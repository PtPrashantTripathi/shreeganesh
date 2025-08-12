import type { phala, SourceBookEn } from "src/backend/types";

interface Props {
    yogPhala: Partial<Record<SourceBookEn, Record<string, phala[]>>>;
}

export default function KundliYogPhala({ yogPhala }: Props) {
    return Object.entries(yogPhala).map(([source_book, phalas]) => {
        // Skip if phalas is undefined or has no keys
        if (!phalas || Object.keys(phalas).length === 0) return null;

        return Object.entries(phalas).map(([yogName, rulesList]) => {
            if (!rulesList || rulesList.length === 0) return null;

            return (
                <section key={`${source_book}-${yogName}`}>
                    <h1>Kundli Yog Phala</h1>
                    <h3>
                        {source_book} ({yogName})
                    </h3>
                    <table cellSpacing={0} cellPadding={6}>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Effect</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rulesList.map(({ description, effect }, index) => (
                                <tr key={index}>
                                    <td>{description.hindi}</td>
                                    <td>{effect.hindi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                </section>
            );
        });
    });
}
