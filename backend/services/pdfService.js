import { PDFParse } from "pdf-parse";

export async function extractTextFromPDF(file) {

    const parser = new PDFParse({
        data: file.buffer
    });

    const result = await parser.getText();

    return result.text;
}