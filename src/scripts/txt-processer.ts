import fs from "fs";
import path from "path";

try {
  const txtPath = path.join(__dirname, "../data/") + "words.txt";
  const jsonPath = path.join(__dirname, "../data/") + "words.json";

  var readStream = fs.createReadStream(txtPath, "utf8");
  let data: string = "";

  readStream
    .on("data", (chunk) => (data += chunk))
    .on("end", () => {
      const accentChars = ["á", "é", "í", "ó", "ú"];
      console.log("Array Length: ", data.length);

      var words: string[] = data.split(/\r?\n/);

      // Filter all words to obtain only those with 5 char length, also filter
      // all words with an accent vowel.
      const filteredWords = words.filter(
        (w) => w.length === 5 && !accentChars.some((ac) => w.includes(ac))
      );

      // Creating object.
      const mappedWords: Array<{ id: number; word: string }> =
        filteredWords.map((w, i) => {
          return { id: i, word: w };
        });

      // Creating json.
      const json = JSON.stringify(mappedWords);

      // Create json file on public folder, ready to use.
      fs.writeFile(jsonPath, json, "utf8", (e) => {
        if (e !== null) {
          const error = new Error(String(e));
          return console.log("Error:", error.stack);
        }

        console.log("Words JSON Generation completed!");
      });
    });
} catch (e) {
  const error = new Error(String(e));
  console.log("Error:", error.stack);
}
