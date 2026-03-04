// ==========================================
//  PyQuest — Level & World Data
// ==========================================

export const worlds = [
  {
    id: 'variable-valley',
    name: 'Variable Valley',
    icon: '🏔️',
    description: 'Master variables, data types, and basic I/O. Your journey begins here!',
    colorClass: 'world-cyan',
    gradient: 'var(--gradient-cyan)',
    accentColor: 'var(--accent-cyan)',
    levels: [
      {
        id: 'vv-1',
        title: 'Hello, World!',
        description: 'Every coder\'s first spell! Use the <code>print()</code> function to display a message to the screen. This is how Python talks to the outside world.',
        starterCode: '# Print "Hello, World!" to the screen\n',
        expectedOutput: 'Hello, World!',
        hints: [
          'Use the print() function with a string inside.',
          'Strings are wrapped in quotes: "Hello, World!"',
          'The full command is: print("Hello, World!")'
        ],
        xpReward: 50
      },
      {
        id: 'vv-2',
        title: 'Store Your Score',
        description: 'Variables are like treasure chests — they store values for later! Create a variable called <code>score</code>, set it to <code>100</code>, and print it.',
        starterCode: '# Create a variable called score with value 100\n# Then print it\n',
        expectedOutput: '100',
        hints: [
          'Assign with: score = 100',
          'Then use print(score)',
          'No quotes around score when printing — it\'s a variable, not a string!'
        ],
        xpReward: 75
      },
      {
        id: 'vv-3',
        title: 'Name Tag',
        description: 'Strings are sequences of characters. Create a variable <code>name</code> with the value <code>"Player One"</code>, then print a greeting using string concatenation.',
        starterCode: '# Create name = "Player One"\n# Print "Welcome, Player One!"\n',
        expectedOutput: 'Welcome, Player One!',
        hints: [
          'Set name = "Player One"',
          'You can concatenate with + : "Welcome, " + name + "!"',
          'Or use an f-string: f"Welcome, {name}!"'
        ],
        xpReward: 100
      }
    ]
  },
  {
    id: 'loop-lagoon',
    name: 'Loop Lagoon',
    icon: '🔁',
    description: 'Dive into the rhythmic waters of loops — for, while, and range await!',
    colorClass: 'world-purple',
    gradient: 'var(--gradient-purple)',
    accentColor: 'var(--accent-purple)',
    levels: [
      {
        id: 'll-1',
        title: 'Count to Ten',
        description: 'Use a <code>for</code> loop with <code>range()</code> to print numbers from 1 to 10, each on a new line.',
        starterCode: '# Use a for loop to print numbers 1 to 10\n',
        expectedOutput: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10',
        hints: [
          'range(1, 11) gives you numbers 1 through 10',
          'for i in range(1, 11): followed by print(i)',
          'Remember to indent the print statement!'
        ],
        xpReward: 75
      },
      {
        id: 'll-2',
        title: 'Sum It Up',
        description: 'Calculate the sum of all numbers from 1 to 5 using a loop and print the total.',
        starterCode: '# Calculate sum of 1 + 2 + 3 + 4 + 5\n# Print the total\n',
        expectedOutput: '15',
        hints: [
          'Start with total = 0',
          'Loop through range(1, 6) and add each number with total += i',
          'Print total after the loop ends!'
        ],
        xpReward: 100
      },
      {
        id: 'll-3',
        title: 'Times Table',
        description: 'Print the multiplication table of 7 (from 7×1 to 7×5). Format: <code>7 x 1 = 7</code>',
        starterCode: '# Print multiplication table of 7\n# Format: 7 x 1 = 7\n',
        expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35',
        hints: [
          'Loop through range(1, 6)',
          'Use an f-string: f"7 x {i} = {7 * i}"',
          'Or use string concatenation with str()'
        ],
        xpReward: 125
      }
    ]
  },
  {
    id: 'function-forest',
    name: 'Function Forest',
    icon: '🌿',
    description: 'Learn to create reusable spells with functions, parameters, and return values.',
    colorClass: 'world-green',
    gradient: 'var(--gradient-green)',
    accentColor: 'var(--accent-green)',
    levels: [
      {
        id: 'ff-1',
        title: 'Greet the Hero',
        description: 'Define a function called <code>greet</code> that takes a <code>name</code> parameter and prints <code>"Hello, [name]!"</code>. Then call it with <code>"Hero"</code>.',
        starterCode: '# Define a greet function\n# Then call it with "Hero"\n',
        expectedOutput: 'Hello, Hero!',
        hints: [
          'def greet(name): to define the function',
          'Inside the function: print(f"Hello, {name}!")',
          'Call with: greet("Hero")'
        ],
        xpReward: 100
      },
      {
        id: 'ff-2',
        title: 'Spell Calculator',
        description: 'Create a function <code>add</code> that takes two numbers and <strong>returns</strong> their sum. Print the result of <code>add(25, 17)</code>.',
        starterCode: '# Define add(a, b) that returns a + b\n# Print add(25, 17)\n',
        expectedOutput: '42',
        hints: [
          'def add(a, b): return a + b',
          'Use the return keyword, not print, inside the function',
          'Print the result: print(add(25, 17))'
        ],
        xpReward: 125
      },
      {
        id: 'ff-3',
        title: 'Factorial Quest',
        description: 'Write a function <code>factorial</code> that calculates n! (e.g., 5! = 120). Print <code>factorial(5)</code>.',
        starterCode: '# Define factorial(n) function\n# Print factorial(5)\n',
        expectedOutput: '120',
        hints: [
          'factorial(0) = 1 is the base case',
          'You can use a loop: result = 1, then multiply by each number from 1 to n',
          'Or use recursion: return n * factorial(n - 1)'
        ],
        xpReward: 150
      }
    ]
  },
  {
    id: 'list-land',
    name: 'List Land',
    icon: '🗂️',
    description: 'Explore the kingdom of lists — indexing, slicing, and powerful methods!',
    colorClass: 'world-pink',
    gradient: 'var(--gradient-pink)',
    accentColor: 'var(--accent-pink)',
    levels: [
      {
        id: 'lld-1',
        title: 'Find the Max',
        description: 'Given a list of numbers, find and print the largest number. Use Python\'s built-in <code>max()</code> function.',
        starterCode: 'numbers = [34, 17, 95, 42, 88, 61]\n# Find and print the maximum\n',
        expectedOutput: '95',
        hints: [
          'Use the max() function',
          'print(max(numbers))',
          'Or loop through and track the largest!'
        ],
        xpReward: 75
      },
      {
        id: 'lld-2',
        title: 'Reverse!',
        description: 'Reverse the given list and print it.',
        starterCode: 'fruits = ["apple", "banana", "cherry", "date"]\n# Reverse and print the list\n',
        expectedOutput: "[\'date\', \'cherry\', \'banana\', \'apple\']",
        hints: [
          'Use fruits.reverse() then print (modifies in-place)',
          'Or use slicing: fruits[::-1]',
          'Or use reversed(): list(reversed(fruits))'
        ],
        xpReward: 100
      },
      {
        id: 'lld-3',
        title: 'No Duplicates',
        description: 'Remove duplicates from the list and print the sorted, unique values.',
        starterCode: 'nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]\n# Remove duplicates and print sorted\n',
        expectedOutput: '[1, 2, 3, 4, 5, 6, 9]',
        hints: [
          'Convert to a set to remove duplicates: set(nums)',
          'Convert back to a sorted list: sorted(set(nums))',
          'Print the result!'
        ],
        xpReward: 125
      }
    ]
  },
  {
    id: 'logic-lab',
    name: 'Logic Lab',
    icon: '🧠',
    description: 'Sharpen your mind with conditionals, comparisons, and logical puzzles.',
    colorClass: 'world-gold',
    gradient: 'var(--gradient-gold)',
    accentColor: 'var(--accent-gold)',
    levels: [
      {
        id: 'lgc-1',
        title: 'Even or Odd?',
        description: 'Write a program that checks if the number 42 is even or odd and prints <code>"Even"</code> or <code>"Odd"</code>.',
        starterCode: 'number = 42\n# Check if even or odd and print\n',
        expectedOutput: 'Even',
        hints: [
          'Use the modulo operator: number % 2',
          'If number % 2 == 0, it\'s even!',
          'Use an if/else statement'
        ],
        xpReward: 75
      },
      {
        id: 'lgc-2',
        title: 'Grade Master',
        description: 'Given a score of 85, print the letter grade: A (90+), B (80-89), C (70-79), D (60-69), F (below 60).',
        starterCode: 'score = 85\n# Print the letter grade\n',
        expectedOutput: 'B',
        hints: [
          'Use if/elif/else statements',
          'Check from highest to lowest: if score >= 90, elif score >= 80, etc.',
          'score 85 falls into the B range (80-89)'
        ],
        xpReward: 100
      },
      {
        id: 'lgc-3',
        title: 'FizzBuzz',
        description: 'The classic challenge! Print numbers 1 to 15. For multiples of 3 print "Fizz", multiples of 5 print "Buzz", multiples of both print "FizzBuzz".',
        starterCode: '# FizzBuzz for 1 to 15\n',
        expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
        hints: [
          'Loop from 1 to 15 with range(1, 16)',
          'Check divisible by both 3 AND 5 first (i % 15 == 0)',
          'Then check 3, then 5, then just print the number'
        ],
        xpReward: 150
      }
    ]
  }
];

// Compute total levels and total XP
export const totalLevels = worlds.reduce((sum, w) => sum + w.levels.length, 0);
export const totalXPAvailable = worlds.reduce((sum, w) =>
  sum + w.levels.reduce((s, l) => s + l.xpReward, 0), 0
);

// Lookup helpers
export function getWorldById(id) {
  return worlds.find(w => w.id === id);
}

export function getLevelById(levelId) {
  for (const world of worlds) {
    const level = world.levels.find(l => l.id === levelId);
    if (level) return { world, level };
  }
  return null;
}
