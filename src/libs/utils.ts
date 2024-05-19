import { DomUtils, parseDocument } from 'htmlparser2';

export function extractTextFromHTML(htmlString: string) {
  // Parseia o HTML para um objeto de documento
  const document = parseDocument(htmlString);
  // Extrai o texto usando DomUtils
  return DomUtils.textContent(document);
}
