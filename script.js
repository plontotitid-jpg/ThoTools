const textInput = document.getElementById("textInput");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const charNoSpace = document.getElementById("charNoSpace");
const lineCount = document.getElementById("lineCount");

function updateStats() {
    const text = textInput.value;

    // Menghitung karakter
    charCount.textContent = text.length;

    // Menghitung karakter tanpa spasi
    charNoSpace.textContent = text.replace(/\s/g, "").length;

    // Menghitung kata
    const words = text.trim().split(/\s+/);

    if (text.trim() === "") {
        wordCount.textContent = 0;
    } else {
        wordCount.textContent = words.length;
    }

    // Menghitung baris
    if (text === "") {
        lineCount.textContent = 0;
    } else {
        lineCount.textContent = text.split("\n").length;
    }
}

textInput.addEventListener("input", updateStats);
const cleanerInput = document.getElementById("cleanerInput");
const cleanerOutput = document.getElementById("cleanerOutput");

const removeExtraSpaces = document.getElementById("removeExtraSpaces");
const removeEmptyLines = document.getElementById("removeEmptyLines");
const removeDuplicates = document.getElementById("removeDuplicates");
const cleanAll = document.getElementById("cleanAll");

function showCleanedText(text) {
    cleanerOutput.value = text;
}

removeExtraSpaces.addEventListener("click", function () {
    const text = cleanerInput.value;

    const cleaned = text
        .split("\n")
        .map(line => line.replace(/[ \t]+/g, " ").trim())
        .join("\n");

    showCleanedText(cleaned);
});

removeEmptyLines.addEventListener("click", function () {
    const text = cleanerInput.value;

    const cleaned = text
        .split("\n")
        .filter(line => line.trim() !== "")
        .join("\n");

    showCleanedText(cleaned);
});

removeDuplicates.addEventListener("click", function () {
    const text = cleanerInput.value;

    const lines = text.split("\n");

    const uniqueLines = [...new Set(lines)];

    showCleanedText(uniqueLines.join("\n"));
});

cleanAll.addEventListener("click", function () {
    const text = cleanerInput.value;

    const cleaned = text
        .split("\n")
        .map(line => line.replace(/[ \t]+/g, " ").trim())
        .filter(line => line !== "")
        .filter((line, index, array) => array.indexOf(line) === index)
        .join("\n");

    showCleanedText(cleaned);
});
const caseInput = document.getElementById("caseInput");
const caseOutput = document.getElementById("caseOutput");

const uppercaseBtn = document.getElementById("uppercaseBtn");
const lowercaseBtn = document.getElementById("lowercaseBtn");
const capitalizeBtn = document.getElementById("capitalizeBtn");
const sentenceBtn = document.getElementById("sentenceBtn");

uppercaseBtn.addEventListener("click", function () {
    caseOutput.value = caseInput.value.toUpperCase();
});

lowercaseBtn.addEventListener("click", function () {
    caseOutput.value = caseInput.value.toLowerCase();
});

capitalizeBtn.addEventListener("click", function () {
    const text = caseInput.value.toLowerCase();

    const result = text.replace(/\b\w/g, function (letter) {
        return letter.toUpperCase();
    });

    caseOutput.value = result;
});

sentenceBtn.addEventListener("click", function () {
    const text = caseInput.value.toLowerCase();

    const result = text.replace(/(^\s*\w|[.!?]\s+\w)/g, function (match) {
        return match.toUpperCase();
    });

    caseOutput.value = result;
});
const paragraphCount = document.getElementById("paragraphCount");
const generateLorem = document.getElementById("generateLorem");
const loremOutput = document.getElementById("loremOutput");
const copyLorem = document.getElementById("copyLorem");

const loremSentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus."
];

function generateParagraph() {
    const shuffled = [...loremSentences].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 4).join(" ");
}

generateLorem.addEventListener("click", function () {
    let count = parseInt(paragraphCount.value);

    if (isNaN(count) || count < 1) {
        count = 1;
    }

    if (count > 20) {
        count = 20;
    }

    const paragraphs = [];

    for (let i = 0; i < count; i++) {
        paragraphs.push(generateParagraph());
    }

    loremOutput.value = paragraphs.join("\n\n");
});

copyLorem.addEventListener("click", function () {
    if (loremOutput.value.trim() === "") {
        return;
    }

    navigator.clipboard.writeText(loremOutput.value);
});
const reverseInput = document.getElementById("reverseInput");
const reverseButton = document.getElementById("reverseButton");
const reverseOutput = document.getElementById("reverseOutput");
const copyReverse = document.getElementById("copyReverse");

reverseButton.addEventListener("click", function () {
    const text = reverseInput.value;

    reverseOutput.value = text.split("").reverse().join("");
});

copyReverse.addEventListener("click", function () {
    if (reverseOutput.value.trim() === "") {
        return;
    }

    navigator.clipboard.writeText(reverseOutput.value);
});
const slugInput = document.getElementById("slugInput");
const generateSlug = document.getElementById("generateSlug");
const slugOutput = document.getElementById("slugOutput");
const copySlug = document.getElementById("copySlug");

generateSlug.addEventListener("click", function () {
    const text = slugInput.value.trim();

    const slug = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

    slugOutput.value = slug;
});

copySlug.addEventListener("click", function () {
    if (slugOutput.value.trim() === "") {
        return;
    }

    navigator.clipboard.writeText(slugOutput.value);
});
const jsonInput = document.getElementById("jsonInput");
const formatJson = document.getElementById("formatJson");
const jsonOutput = document.getElementById("jsonOutput");
const copyJson = document.getElementById("copyJson");

formatJson.addEventListener("click", function () {
    const text = jsonInput.value.trim();

    if (text === "") {
        jsonOutput.value = "";
        return;
    }

    try {
        const parsedJson = JSON.parse(text);

        jsonOutput.value = JSON.stringify(parsedJson, null, 2);
    } catch (error) {
        jsonOutput.value = "Invalid JSON. Please check your input.";
    }
});

copyJson.addEventListener("click", function () {
    if (jsonOutput.value.trim() === "") {
        return;
    }

    navigator.clipboard.writeText(jsonOutput.value);
});
const menuToggle = document.getElementById("menuToggle");
const toolMenu = document.getElementById("toolMenu");

menuToggle.addEventListener("click", function () {
    toolMenu.classList.toggle("show");
});
