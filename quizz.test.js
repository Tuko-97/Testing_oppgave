import { testQuizz } from "./quizz";
import {it, expect} from "vitest";

//Tests for question 1
it("should return 'You are right!' if answered correct on quizz", () => {
    expect(testQuizz("I'll be back", 3)).toBe("You are right!");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("Yippie-cayaye motherfucker", 3)).toBe("Sorry, you were wrong! Please try again");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("You feeli'n lucky, punk?", 3)).toBe("Sorry, you were wrong! Please try again");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("I will find you, and I will kill you", 3)).toBe("Sorry, you were wrong! Please try again");
});

//Test for question 2
it("should return 'You are right!' if answered correct on quizz", () => {
    expect(testQuizz("42", 2)).toBe("You are right!");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("Make money and fuck bitches", 2)).toBe("Sorry, you were wrong! Please try again");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("Alcohol, drugs and fast cars", 2)).toBe("Sorry, you were wrong! Please try again");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("Waiting for the inevitable heat-death of our existance", 2)).toBe("Sorry, you were wrong! Please try again");
});

//Test for question 3
it("should return 'You are right!' if answered correct on quizz", () => {
    expect(testQuizz("Samuel L. Jackson requested it", 0)).toBe("You are right!");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("It looked cool", 0)).toBe("Sorry, you were wrong! Please try again");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("It was a production accident", 0)).toBe("Sorry, you were wrong! Please try again");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("Hello there", 0)).toBe("Sorry, you were wrong! Please try again");
});

//Test for question 4
it("should return 'You are right!' if answered correct on quizz", () => {
    expect(testQuizz("Rey Palpatine", 1)).toBe("You are right!");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("Anakin Skywalker", 1)).toBe("Sorry, you were wrong! Please try again");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("Quinlan Vos", 1)).toBe("Sorry, you were wrong! Please try again");
});

it("should return 'Sorry, you were wrong! Please try again' if answered wrong on quizz", () => {
    expect(testQuizz("Ahsoka Tano", 1)).toBe("Sorry, you were wrong! Please try again");
});