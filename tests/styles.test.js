const { TextEncoder, TextDecoder } = require("util");
Object.assign(global, { TextDecoder, TextEncoder });

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf8");
const css = fs.readFileSync(path.resolve(__dirname, "../src/styles.css"), "utf8");

let dom;
let document;
let window;

describe("CSS Loading Effects", () => {
    beforeEach(() => {
        dom = new JSDOM(html, { resources: "usable", runScripts: "dangerously" });
        window = dom.window;
        document = window.document;

        // Create a style element and append the CSS to it
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);
    });

    test("should load the CSS file", () => {
        const styleElement = document.querySelector("style");
        expect(styleElement).not.toBeNull();
        expect(styleElement.textContent).toContain(":root");
    });

    test("spinner should have correct initial styles", () => {
        const spinner = document.querySelector(".spinner");
        expect(spinner).not.toBeNull();
        const computedStyle = window.getComputedStyle(spinner);
        expect(computedStyle.width).toBe("40px");
        expect(computedStyle.height).toBe("40px");
        expect(computedStyle.borderRadius).toBe("50%");
    });

    test("dots-loader should have correct display style", () => {
        const dotsLoader = document.querySelector(".dots-loader");
        expect(dotsLoader).not.toBeNull();
        const computedStyle = window.getComputedStyle(dotsLoader);
        expect(computedStyle.display).toBe("flex");
    });

    test("button with loading class should hide text", () => {
        const button = document.querySelector(".btn.loading");
        expect(button).not.toBeNull();
        const computedStyle = window.getComputedStyle(button);
        expect(computedStyle.color).toBe("rgba(0, 0, 0, 0)");
    });
});

