interface Props {
    yogPhala: Partial<Record<SourceBookEnglishType, Record<string, rules[]>>>;
}

export default function KundliYogPhala({ yogPhala }: Props) {
    return Object.entries(yogPhala).map(([source_book, yogs]) =>
        Object.entries(yogs).map(([yogName, rulesList]) => {
            const validRules = rulesList.filter(rule => rule.rule);
            if (validRules.length === 0) return null;

            return (
                <section key={yogName}>
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
                            {validRules.map(
                                ({ description, effect }, index) => (
                                    <tr key={index}>
                                        <td>{description.hindi}</td>
                                        <td>{effect.hindi}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <br />
                </section>
            );
        })
    );
}
