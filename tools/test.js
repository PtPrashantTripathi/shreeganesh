import { Project, SyntaxKind } from "ts-morph";
import * as fs from "fs";

const project = new Project();
const sourceFile = project.addSourceFileAtPath("src/backend/YogPhala.ts");

// Prepare the output object
const output = {};

// Get the main variable initializer
const dataVar = sourceFile.getVariableDeclarationOrThrow("data");
const dataInit = dataVar.getInitializerIfKindOrThrow(
    SyntaxKind.ObjectLiteralExpression
);

// Loop through top-level Yogas (key1 → book)
for (const bookProp of dataInit.getProperties()) {
    if (!bookProp.isKind(SyntaxKind.PropertyAssignment)) continue;

    const book = bookProp.getName().replace(/['"]/g, "");
    output[book] = {};

    const bookInit = bookProp.getInitializerIfKindOrThrow(
        SyntaxKind.ObjectLiteralExpression
    );

    // Loop through chapters (key2)
    for (const chapterProp of bookInit.getProperties()) {
        if (!chapterProp.isKind(SyntaxKind.PropertyAssignment)) continue;

        const chapter = chapterProp.getName().replace(/['"]/g, "");
        output[book][chapter] = [];

        const arrayInit = chapterProp.getInitializerIfKindOrThrow(
            SyntaxKind.ArrayLiteralExpression
        );

        for (const element of arrayInit.getElements()) {
            if (!element.isKind(SyntaxKind.ObjectLiteralExpression)) continue;

            const entry = {};

            for (const prop of element.getProperties()) {
                if (!prop.isKind(SyntaxKind.PropertyAssignment)) continue;

                const name = prop.getName().replace(/['"]/g, "");
                let value = prop.getInitializer().getText();

                if (name != "rule") {
                    value = value.replace(/['"]/g, "");
                }
                entry[name] = value;
            }

            output[book][chapter].push(entry);
        }
    }
}

// Write to data.json
fs.writeFileSync("data.json", JSON.stringify(output, null, 2));

console.log("✅ data.json written successfully.");
