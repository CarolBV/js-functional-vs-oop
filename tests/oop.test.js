import { expect, test } from "vitest";
import { Dog } from "../src/oop";

test('should create a dog', () => {
    const firulais = new Dog('Firulais', 3)
    expect(firulais).toMatchObject({name: 'Firulais', age: 3})
})

test('should dog bark', () => { 
    const firulais = new Dog('Firulais', 3)
    expect(firulais.bark()).toBe('Firulais is barking')
})

test('should a dog run', ()=> {
    const firulais = new Dog('Firulais', 3)
    expect(firulais.run()).toBe('Firulais is running')
})
test('should a dog eat', ()=> {
    const firulais = new Dog('Firulais', 3)
    expect(firulais.eat()).toBe('Firulais is eating')
})
test('should a dog run', ()=> {
    const firulais = new Dog('Firulais', 3)
    expect(firulais.turnYears()).toBe('Firulais turn 3 years')
})
