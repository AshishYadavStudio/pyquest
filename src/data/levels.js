// ==========================================
//  PyQuest — Level & World Data (Full Curriculum)
// ==========================================

export const worlds = [

    // ── WORLD 1: Python Basics ────────────────────────────
    {
        id: 'python-basics',
        name: 'Python Basics',
        icon: '🚀',
        description: 'Your journey begins! Learn print, comments, input, and your first Python programs.',
        colorClass: 'world-cyan',
        gradient: 'var(--gradient-cyan)',
        accentColor: 'var(--accent-cyan)',
        levels: [
            {
                id: 'pb-1',
                title: 'Hello, World!',
                description: 'Every coder\'s first spell! Use the <code>print()</code> function to display a message.',
                starterCode: '# Print "Hello, World!" to the screen\n',
                expectedOutput: 'Hello, World!',
                hints: ['Use the print() function with a string inside.', 'Strings are wrapped in quotes: "Hello, World!"', 'Full command: print("Hello, World!")'],
                xpReward: 50
            },
            {
                id: 'pb-2',
                title: 'Print Multiple Lines',
                description: 'Use multiple <code>print()</code> statements to display your name on line 1 and "I love Python" on line 2.',
                starterCode: '# Print "PyQuest" on line 1\n# Print "I love Python" on line 2\n',
                expectedOutput: 'PyQuest\nI love Python',
                hints: ['Use two separate print() calls', 'Each print() outputs on a new line', 'print("PyQuest") then print("I love Python")'],
                xpReward: 50
            },
            {
                id: 'pb-3',
                title: 'Comments Master',
                description: 'Comments are notes for humans that Python ignores. Add a comment above the print, then print <code>"Comments are cool!"</code>.',
                starterCode: '# Write a comment here explaining the code\n# Then print "Comments are cool!"\n',
                expectedOutput: 'Comments are cool!',
                hints: ['Lines starting with # are comments', 'They don\'t affect the output', 'print("Comments are cool!")'],
                xpReward: 50
            },
            {
                id: 'pb-4',
                title: 'Escape Characters',
                description: 'Use a single print statement with <code>\\n</code> and <code>\\t</code> to print:<br><code>Name:\\tPyQuest</code> on line 1 and <code>Type:\\tGame</code> on line 2.',
                starterCode: '# Use \\n for newline and \\t for tab\n',
                expectedOutput: 'Name:\tPyQuest\nType:\tGame',
                hints: ['\\n creates a new line inside a string', '\\t creates a tab space', 'print("Name:\\tPyQuest\\nType:\\tGame")'],
                xpReward: 75
            },
            {
                id: 'pb-5',
                title: 'Print with Sep & End',
                description: 'Use <code>print()</code> with the <code>sep</code> parameter to print <code>2026-03-04</code> from three separate values.',
                starterCode: '# Print 2026, "03", "04" separated by "-"\n',
                expectedOutput: '2026-03-04',
                hints: ['print() can take multiple arguments', 'Use sep="-" to change the separator', 'print(2026, "03", "04", sep="-")'],
                xpReward: 75
            }
        ]
    },

    // ── WORLD 2: Data Types ────────────────────────────────
    {
        id: 'data-types',
        name: 'Data Types Kingdom',
        icon: '📦',
        description: 'Discover integers, floats, strings, booleans, and the type() function.',
        colorClass: 'world-purple',
        gradient: 'var(--gradient-purple)',
        accentColor: 'var(--accent-purple)',
        levels: [
            {
                id: 'dt-1',
                title: 'Integer Warrior',
                description: 'Create an integer variable <code>age = 20</code> and print its type using <code>type()</code>.',
                starterCode: '# Create age = 20\n# Print type(age)\n',
                expectedOutput: "<class 'int'>",
                hints: ['Integers are whole numbers', 'age = 20', 'print(type(age))'],
                xpReward: 50
            },
            {
                id: 'dt-2',
                title: 'Float Explorer',
                description: 'Create a float variable <code>pi = 3.14</code> and print its value followed by its type.',
                starterCode: '# Create pi = 3.14\n# Print pi, then print type(pi)\n',
                expectedOutput: "3.14\n<class 'float'>",
                hints: ['Floats have decimal points', 'print(pi) then print(type(pi))', 'Two separate print statements'],
                xpReward: 50
            },
            {
                id: 'dt-3',
                title: 'String Sorcerer',
                description: 'Create a string <code>game = "PyQuest"</code>, print the string and its type.',
                starterCode: '# Create game = "PyQuest"\n# Print game and type(game)\n',
                expectedOutput: "PyQuest\n<class 'str'>",
                hints: ['Strings are text in quotes', 'print(game) then print(type(game))', 'Both single and double quotes work'],
                xpReward: 50
            },
            {
                id: 'dt-4',
                title: 'Boolean Guardian',
                description: 'Create two booleans: <code>is_active = True</code> and <code>is_over = False</code>. Print both values.',
                starterCode: '# Create is_active = True and is_over = False\n# Print both\n',
                expectedOutput: 'True\nFalse',
                hints: ['Booleans are True or False (capitalized!)', 'print(is_active) then print(is_over)', 'True and False are keywords in Python'],
                xpReward: 75
            },
            {
                id: 'dt-5',
                title: 'Type Detective',
                description: 'Given the values below, print the type of each one, each on a new line.',
                starterCode: 'a = 42\nb = 3.14\nc = "hello"\nd = True\n# Print type of each\n',
                expectedOutput: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
                hints: ['Use type() for each variable', 'print(type(a)), print(type(b)), etc.', 'Four print statements needed'],
                xpReward: 100
            }
        ]
    },

    // ── WORLD 3: Variables & Scope ─────────────────────────
    {
        id: 'variables-scope',
        name: 'Variable Valley',
        icon: '🏔️',
        description: 'Master variables, naming rules, assignment, swapping, and scope (local vs global).',
        colorClass: 'world-cyan',
        gradient: 'var(--gradient-cyan)',
        accentColor: 'var(--accent-cyan)',
        levels: [
            {
                id: 'vs-1',
                title: 'Store Your Score',
                description: 'Create a variable <code>score = 100</code> and print it.',
                starterCode: '# Create score = 100 and print it\n',
                expectedOutput: '100',
                hints: ['Assign with: score = 100', 'Then print(score)', 'No quotes around score — it\'s a variable!'],
                xpReward: 50
            },
            {
                id: 'vs-2',
                title: 'Multiple Assignment',
                description: 'Assign <code>x, y, z = 10, 20, 30</code> in one line, then print their sum.',
                starterCode: '# Assign x, y, z in one line\n# Print their sum\n',
                expectedOutput: '60',
                hints: ['Python supports: x, y, z = 10, 20, 30', 'print(x + y + z)', 'This is called tuple unpacking'],
                xpReward: 75
            },
            {
                id: 'vs-3',
                title: 'Swap Two Variables',
                description: 'Swap the values of <code>a</code> and <code>b</code> without using a third variable, then print both.',
                starterCode: 'a = 5\nb = 10\n# Swap a and b\n# Print a, then print b\n',
                expectedOutput: '10\n5',
                hints: ['Python supports: a, b = b, a', 'This swaps values in one line!', 'Then print(a) and print(b)'],
                xpReward: 100
            },
            {
                id: 'vs-4',
                title: 'Global Variable',
                description: 'Create a global variable <code>player = "Hero"</code>. Define a function <code>greet()</code> that prints <code>"Hello, Hero!"</code> using the global variable. Call the function.',
                starterCode: 'player = "Hero"\n\n# Define greet() that uses the global player\n# Call greet()\n',
                expectedOutput: 'Hello, Hero!',
                hints: ['Global variables are accessible inside functions', 'def greet(): print(f"Hello, {player}!")', 'Call with greet()'],
                xpReward: 100
            },
            {
                id: 'vs-5',
                title: 'Local vs Global Scope',
                description: 'The function below should modify the global <code>count</code> variable. Use the <code>global</code> keyword to make it work, then print count after calling the function.',
                starterCode: 'count = 0\n\ndef increment():\n    # Use global keyword here\n    count = count + 10\n\nincrement()\nprint(count)\n',
                expectedOutput: '10',
                hints: ['Add "global count" as the first line inside the function', 'Without it, Python treats count as local', 'global count tells Python to use the outer variable'],
                xpReward: 125
            }
        ]
    },

    // ── WORLD 4: Operators & Expressions ───────────────────
    {
        id: 'operators',
        name: 'Operator Arena',
        icon: '⚙️',
        description: 'Master arithmetic, comparison, logical, and assignment operators.',
        colorClass: 'world-green',
        gradient: 'var(--gradient-green)',
        accentColor: 'var(--accent-green)',
        levels: [
            {
                id: 'op-1',
                title: 'Arithmetic Basics',
                description: 'Compute and print the results of: <code>15 + 7</code>, <code>20 - 8</code>, <code>6 * 4</code>, <code>25 / 4</code> — each on a new line.',
                starterCode: '# Print 15+7, 20-8, 6*4, 25/4\n',
                expectedOutput: '22\n12\n24\n6.25',
                hints: ['Use print() for each operation', 'Division (/) always returns a float', 'Four print statements needed'],
                xpReward: 50
            },
            {
                id: 'op-2',
                title: 'Floor Division & Modulo',
                description: 'Print the floor division <code>17 // 3</code> and the remainder <code>17 % 3</code>.',
                starterCode: '# Print 17 // 3 and 17 % 3\n',
                expectedOutput: '5\n2',
                hints: ['// is floor (integer) division', '% gives the remainder (modulo)', '17 = 3×5 + 2'],
                xpReward: 75
            },
            {
                id: 'op-3',
                title: 'Power Up!',
                description: 'Calculate <code>2 ** 10</code> (2 to the power of 10) and print the result.',
                starterCode: '# Calculate 2 to the power of 10\n',
                expectedOutput: '1024',
                hints: ['** is the exponentiation operator', 'print(2 ** 10)', '2^10 = 1024'],
                xpReward: 50
            },
            {
                id: 'op-4',
                title: 'Comparison Quest',
                description: 'Compare and print the results: <code>10 > 5</code>, <code>3 == 3</code>, <code>7 != 7</code>, <code>4 <= 4</code>.',
                starterCode: '# Print comparison results\n',
                expectedOutput: 'True\nTrue\nFalse\nTrue',
                hints: ['Comparisons return True or False', '== checks equality, != checks inequality', 'print(10 > 5), print(3 == 3), etc.'],
                xpReward: 75
            },
            {
                id: 'op-5',
                title: 'Logical Operators',
                description: 'Print the results of: <code>True and False</code>, <code>True or False</code>, <code>not True</code>.',
                starterCode: '# Print logical operation results\n',
                expectedOutput: 'False\nTrue\nFalse',
                hints: ['and returns True only if BOTH are True', 'or returns True if EITHER is True', 'not inverts the value'],
                xpReward: 75
            },
            {
                id: 'op-6',
                title: 'Expression Evaluator',
                description: 'Evaluate and print: <code>(5 + 3) * 2 - 4 / 2</code>. Python follows PEMDAS order of operations.',
                starterCode: '# Evaluate and print the expression\n',
                expectedOutput: '14.0',
                hints: ['Parentheses first: 5+3 = 8', 'Then multiply and divide: 8*2=16, 4/2=2.0', '16 - 2.0 = 14.0 (float because of division)'],
                xpReward: 100
            },
            {
                id: 'op-7',
                title: 'Augmented Assignment',
                description: 'Start with <code>x = 10</code>. Use <code>+=</code>, <code>-=</code>, <code>*=</code> to make x = 10, then 15, then 12, then 36. Print x after each operation.',
                starterCode: 'x = 10\nprint(x)\n# Add 5 to x, print\n# Subtract 3, print\n# Multiply by 3, print\n',
                expectedOutput: '10\n15\n12\n36',
                hints: ['x += 5 is the same as x = x + 5', 'x -= 3 subtracts 3', 'x *= 3 multiplies by 3'],
                xpReward: 100
            }
        ]
    },

    // ── WORLD 5: Type Conversion ───────────────────────────
    {
        id: 'type-conversion',
        name: 'Type Forge',
        icon: '🔄',
        description: 'Transform data between types — int, float, str, bool — like a true Python alchemist!',
        colorClass: 'world-pink',
        gradient: 'var(--gradient-pink)',
        accentColor: 'var(--accent-pink)',
        levels: [
            {
                id: 'tc-1',
                title: 'String to Integer',
                description: 'Convert the string <code>"42"</code> to an integer and print the result of adding 8 to it.',
                starterCode: 'num_str = "42"\n# Convert to int and add 8\n',
                expectedOutput: '50',
                hints: ['Use int() to convert a string to integer', 'num = int(num_str)', 'print(num + 8)'],
                xpReward: 75
            },
            {
                id: 'tc-2',
                title: 'Integer to Float',
                description: 'Convert the integer <code>7</code> to a float and print the result.',
                starterCode: 'x = 7\n# Convert to float and print\n',
                expectedOutput: '7.0',
                hints: ['Use float() to convert', 'print(float(x))', 'Floats always show a decimal point'],
                xpReward: 50
            },
            {
                id: 'tc-3',
                title: 'Float to Integer',
                description: 'Convert <code>9.87</code> to an integer (truncates, doesn\'t round) and print it.',
                starterCode: 'price = 9.87\n# Convert to int and print\n',
                expectedOutput: '9',
                hints: ['int() truncates (removes) the decimal part', 'It does NOT round — 9.87 becomes 9', 'print(int(price))'],
                xpReward: 50
            },
            {
                id: 'tc-4',
                title: 'Number to String',
                description: 'Concatenate the string <code>"Score: "</code> with the integer <code>100</code> and print it.',
                starterCode: 'label = "Score: "\nvalue = 100\n# Concatenate and print\n',
                expectedOutput: 'Score: 100',
                hints: ['You can\'t concatenate str + int directly', 'Convert the int to str first: str(value)', 'print(label + str(value))'],
                xpReward: 75
            },
            {
                id: 'tc-5',
                title: 'Bool Conversion',
                description: 'Print the boolean value of: <code>0</code>, <code>1</code>, <code>""</code> (empty string), and <code>"hello"</code>.',
                starterCode: '# Print bool() of 0, 1, "", "hello"\n',
                expectedOutput: 'False\nTrue\nFalse\nTrue',
                hints: ['bool(0) is False, bool(1) is True', 'Empty string "" is False (falsy)', 'Any non-empty string is True (truthy)'],
                xpReward: 100
            },
            {
                id: 'tc-6',
                title: 'Type Conversion Chain',
                description: 'Start with the string <code>"3.14"</code>. Convert it to float, then to int, then back to string. Print the final result.',
                starterCode: 'val = "3.14"\n# Convert: str → float → int → str\n# Print the final string\n',
                expectedOutput: '3',
                hints: ['Step 1: float("3.14") = 3.14', 'Step 2: int(3.14) = 3', 'Step 3: str(3) = "3" → print it'],
                xpReward: 100
            }
        ]
    },

    // ── WORLD 6: If Statements ─────────────────────────────
    {
        id: 'if-statements',
        name: 'Conditional Castle',
        icon: '🏰',
        description: 'Master if, if-else, if-elif-else chains, and conditionals with lists!',
        colorClass: 'world-gold',
        gradient: 'var(--gradient-gold)',
        accentColor: 'var(--accent-gold)',
        levels: [
            {
                id: 'if-1',
                title: 'Simple If',
                description: 'Check if <code>temperature = 35</code> is greater than 30. If yes, print <code>"It\'s hot!"</code>.',
                starterCode: 'temperature = 35\n# Check if temperature > 30\n',
                expectedOutput: "It's hot!",
                hints: ['Use: if temperature > 30:', 'Indent the next line with 4 spaces', 'print("It\'s hot!")'],
                xpReward: 50
            },
            {
                id: 'if-2',
                title: 'If-Else Gate',
                description: 'Check if <code>number = 7</code> is even or odd. Print <code>"Even"</code> or <code>"Odd"</code>.',
                starterCode: 'number = 7\n# Check if even or odd\n',
                expectedOutput: 'Odd',
                hints: ['Use number % 2 == 0 to check even', 'if even: print("Even") else: print("Odd")', '7 % 2 = 1, so it\'s odd'],
                xpReward: 75
            },
            {
                id: 'if-3',
                title: 'Grade Calculator',
                description: 'Given <code>score = 85</code>, print the grade: A (90+), B (80-89), C (70-79), D (60-69), F (below 60).',
                starterCode: 'score = 85\n# Print the letter grade\n',
                expectedOutput: 'B',
                hints: ['Use if/elif/else chain', 'Check from highest: if score >= 90, elif score >= 80...', '85 falls in the B range'],
                xpReward: 100
            },
            {
                id: 'if-4',
                title: 'If-Elif-Else Chain',
                description: 'Classify <code>bmi = 22.5</code>: Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (30+). Print the category.',
                starterCode: 'bmi = 22.5\n# Classify the BMI\n',
                expectedOutput: 'Normal',
                hints: ['if bmi < 18.5: Underweight', 'elif bmi < 25: Normal', 'elif bmi < 30: Overweight, else: Obese'],
                xpReward: 100
            },
            {
                id: 'if-5',
                title: 'Nested If',
                description: 'Check if <code>num = 15</code> is positive. If yes, check if it\'s even or odd. Print <code>"Positive Odd"</code>.',
                starterCode: 'num = 15\n# Nested if: positive → even/odd\n',
                expectedOutput: 'Positive Odd',
                hints: ['First: if num > 0:', 'Inside that: if num % 2 == 0: "Positive Even"', 'else: "Positive Odd"'],
                xpReward: 100
            },
            {
                id: 'if-6',
                title: 'If with Lists',
                description: 'Check if <code>"banana"</code> is in the fruits list. If yes, print <code>"Found!"</code>. If not, print <code>"Not found."</code>.',
                starterCode: 'fruits = ["apple", "banana", "cherry", "date"]\n# Check if "banana" is in the list\n',
                expectedOutput: 'Found!',
                hints: ['Use the "in" keyword: if "banana" in fruits:', 'This checks membership in a list', 'print("Found!")'],
                xpReward: 75
            },
            {
                id: 'if-7',
                title: 'Multi-Condition Check',
                description: 'Given <code>age = 25</code> and <code>has_license = True</code>, print <code>"Can drive"</code> if both conditions are met, otherwise <code>"Cannot drive"</code>.',
                starterCode: 'age = 25\nhas_license = True\n# Check both conditions\n',
                expectedOutput: 'Can drive',
                hints: ['Use "and" to combine conditions', 'if age >= 18 and has_license:', 'Both must be True'],
                xpReward: 100
            }
        ]
    },

    // ── WORLD 7: Loops ─────────────────────────────────────
    {
        id: 'loops',
        name: 'Loop Lagoon',
        icon: '🔁',
        description: 'Dive into for loops, while loops, break, continue, nested loops, and loops with data structures!',
        colorClass: 'world-purple',
        gradient: 'var(--gradient-purple)',
        accentColor: 'var(--accent-purple)',
        levels: [
            {
                id: 'lp-1',
                title: 'Count to Ten',
                description: 'Use a <code>for</code> loop with <code>range()</code> to print numbers 1 to 10.',
                starterCode: '# Print numbers 1 to 10 using a for loop\n',
                expectedOutput: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10',
                hints: ['range(1, 11) gives 1 through 10', 'for i in range(1, 11):', 'print(i) inside the loop'],
                xpReward: 50
            },
            {
                id: 'lp-2',
                title: 'While Countdown',
                description: 'Use a <code>while</code> loop to count down from 5 to 1, then print <code>"Go!"</code>.',
                starterCode: '# Countdown from 5 to 1, then print "Go!"\n',
                expectedOutput: '5\n4\n3\n2\n1\nGo!',
                hints: ['Start with n = 5', 'while n > 0: print(n), then n -= 1', 'After the loop: print("Go!")'],
                xpReward: 75
            },
            {
                id: 'lp-3',
                title: 'Sum of N Numbers',
                description: 'Calculate the sum of numbers 1 to 100 using a loop and print it.',
                starterCode: '# Sum of 1 to 100\n',
                expectedOutput: '5050',
                hints: ['total = 0, then loop range(1, 101)', 'total += i in each iteration', 'Gauss was right: 5050!'],
                xpReward: 75
            },
            {
                id: 'lp-4',
                title: 'Multiplication Table',
                description: 'Print the multiplication table of 7 (7×1 to 7×5). Format: <code>7 x 1 = 7</code>.',
                starterCode: '# Print multiplication table of 7\n',
                expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35',
                hints: ['Loop range(1, 6)', 'Use f-string: f"7 x {i} = {7*i}"', 'Don\'t forget proper spacing'],
                xpReward: 100
            },
            {
                id: 'lp-5',
                title: 'Break the Loop',
                description: 'Loop through numbers 1 to 10. Print each number, but <code>break</code> when you hit 5 (print 5 too).',
                starterCode: '# Print 1 to 10 but break at 5\n',
                expectedOutput: '1\n2\n3\n4\n5',
                hints: ['for i in range(1, 11):', 'print(i) first, then check', 'if i == 5: break'],
                xpReward: 75
            },
            {
                id: 'lp-6',
                title: 'Continue to Skip',
                description: 'Print numbers 1 to 7, but skip (don\'t print) the number 4 using <code>continue</code>.',
                starterCode: '# Print 1-7 but skip 4\n',
                expectedOutput: '1\n2\n3\n5\n6\n7',
                hints: ['for i in range(1, 8):', 'if i == 4: continue', 'continue skips to the next iteration'],
                xpReward: 75
            },
            {
                id: 'lp-7',
                title: 'Nested Loop Pattern',
                description: 'Use nested loops to print this right-triangle star pattern (3 rows):<br><code>*</code><br><code>* *</code><br><code>* * *</code>',
                starterCode: '# Print star triangle pattern (3 rows)\n',
                expectedOutput: '*\n* *\n* * *',
                hints: ['Outer loop: for i in range(1, 4)', 'Inner: print("* " * i) — but strip trailing space', 'Use print(" ".join(["*"] * i))'],
                xpReward: 125
            },
            {
                id: 'lp-8',
                title: 'While with a List',
                description: 'Use a <code>while</code> loop to print and remove items from the list until it\'s empty.',
                starterCode: 'queue = ["Alice", "Bob", "Charlie"]\n# Use while loop to pop and print each name\n',
                expectedOutput: 'Alice\nBob\nCharlie',
                hints: ['while queue: (truthy while not empty)', 'Use queue.pop(0) to remove the first item', 'Print the popped value'],
                xpReward: 100
            },
            {
                id: 'lp-9',
                title: 'Loop Through a Dictionary',
                description: 'Loop through the dictionary and print each key-value pair as <code>"key: value"</code>.',
                starterCode: 'scores = {"Alice": 90, "Bob": 85, "Charlie": 92}\n# Print each as "name: score"\n',
                expectedOutput: 'Alice: 90\nBob: 85\nCharlie: 92',
                hints: ['for name, score in scores.items():', 'Use f-string: f"{name}: {score}"', '.items() gives you both key and value'],
                xpReward: 100
            },
            {
                id: 'lp-10',
                title: 'FizzBuzz Classic',
                description: 'Print 1 to 15. For multiples of 3: "Fizz", multiples of 5: "Buzz", both: "FizzBuzz".',
                starterCode: '# FizzBuzz for 1 to 15\n',
                expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz',
                hints: ['Check divisible by 15 first (both 3 and 5)', 'Then check 3, then 5, then just the number', 'Use i % 3 == 0 and i % 5 == 0'],
                xpReward: 150
            }
        ]
    },

    // ── WORLD 8: Strings ───────────────────────────────────
    {
        id: 'strings',
        name: 'String Sanctum',
        icon: '🧵',
        description: 'Explore string operations, traversal, slicing, methods, and built-in functions!',
        colorClass: 'world-green',
        gradient: 'var(--gradient-green)',
        accentColor: 'var(--accent-green)',
        levels: [
            {
                id: 'st-1',
                title: 'String Basics',
                description: 'Create a string <code>msg = "Python is fun!"</code> and print its length using <code>len()</code>.',
                starterCode: 'msg = "Python is fun!"\n# Print the length\n',
                expectedOutput: '14',
                hints: ['len() returns the length of a string', 'print(len(msg))', 'Spaces and ! count too!'],
                xpReward: 50
            },
            {
                id: 'st-2',
                title: 'String Indexing',
                description: 'Given <code>word = "PYTHON"</code>, print the first character, last character, and the character at index 3.',
                starterCode: 'word = "PYTHON"\n# Print first, last, and index 3\n',
                expectedOutput: 'P\nN\nH',
                hints: ['First char: word[0]', 'Last char: word[-1]', 'Index 3: word[3] → "H"'],
                xpReward: 75
            },
            {
                id: 'st-3',
                title: 'String Slicing',
                description: 'Given <code>text = "Hello, World!"</code>, use slicing to print <code>"Hello"</code>, <code>"World"</code>, and the reversed string.',
                starterCode: 'text = "Hello, World!"\n# Print "Hello"\n# Print "World"\n# Print reversed string\n',
                expectedOutput: 'Hello\nWorld\n!dlroW ,olleH',
                hints: ['text[0:5] gives "Hello"', 'text[7:12] gives "World"', 'text[::-1] reverses the string'],
                xpReward: 100
            },
            {
                id: 'st-4',
                title: 'String Concatenation & Repetition',
                description: 'Concatenate <code>"Py"</code> and <code>"thon"</code>. Then print the dash <code>"-"</code> repeated 10 times.',
                starterCode: '# Concatenate "Py" + "thon"\n# Print "-" * 10\n',
                expectedOutput: 'Python\n----------',
                hints: ['Use + to concatenate strings', 'Use * to repeat a string', 'print("Py" + "thon") then print("-" * 10)'],
                xpReward: 50
            },
            {
                id: 'st-5',
                title: 'Traverse a String',
                description: 'Use a <code>for</code> loop to print each character of <code>"CODE"</code> on a new line.',
                starterCode: 'word = "CODE"\n# Print each character on a new line\n',
                expectedOutput: 'C\nO\nD\nE',
                hints: ['for char in word:', 'print(char)', 'Strings are iterable in Python!'],
                xpReward: 50
            },
            {
                id: 'st-6',
                title: 'Traverse with Index',
                description: 'Print each character of <code>"GAME"</code> with its index: <code>"0: G"</code>, <code>"1: A"</code>, etc.',
                starterCode: 'word = "GAME"\n# Print index and character\n',
                expectedOutput: '0: G\n1: A\n2: M\n3: E',
                hints: ['Use enumerate(): for i, ch in enumerate(word):', 'Or use range(len(word))', 'print(f"{i}: {ch}")'],
                xpReward: 75
            },
            {
                id: 'st-7',
                title: 'Upper & Lower',
                description: 'Given <code>msg = "Hello World"</code>, print the uppercase version, then the lowercase version.',
                starterCode: 'msg = "Hello World"\n# Print uppercase and lowercase\n',
                expectedOutput: 'HELLO WORLD\nhello world',
                hints: ['.upper() converts to uppercase', '.lower() converts to lowercase', 'print(msg.upper()) then print(msg.lower())'],
                xpReward: 50
            },
            {
                id: 'st-8',
                title: 'Find & Replace',
                description: 'In the string <code>"I like Java"</code>, replace <code>"Java"</code> with <code>"Python"</code> and print the result.',
                starterCode: 'text = "I like Java"\n# Replace Java with Python\n',
                expectedOutput: 'I like Python',
                hints: ['Use .replace(old, new)', 'text.replace("Java", "Python")', 'Strings are immutable — replace returns a NEW string'],
                xpReward: 75
            },
            {
                id: 'st-9',
                title: 'Split & Join',
                description: 'Split <code>"apple,banana,cherry"</code> by commas, then join them back with <code>" | "</code>.',
                starterCode: 'fruits = "apple,banana,cherry"\n# Split by comma, then join with " | "\n',
                expectedOutput: 'apple | banana | cherry',
                hints: ['.split(",") splits into a list', '" | ".join(list) joins with separator', 'print(" | ".join(fruits.split(",")))'],
                xpReward: 100
            },
            {
                id: 'st-10',
                title: 'String Methods Combo',
                description: 'Given the string <code>"  PyQuest is AWESOME!  "</code>, strip whitespace, convert to title case, and print. Then print whether it starts with "Pyquest".',
                starterCode: 'text = "  PyQuest is AWESOME!  "\n# Strip, title case, and print\n# Check if result starts with "Pyquest"\n',
                expectedOutput: 'Pyquest Is Awesome!\nTrue',
                hints: ['.strip() removes leading/trailing spaces', '.title() converts to Title Case', '.startswith("Pyquest") checks the beginning'],
                xpReward: 125
            },
            {
                id: 'st-11',
                title: 'Count & Find',
                description: 'In <code>"mississippi"</code>, count how many times <code>"s"</code> appears, and find the index of the first <code>"p"</code>.',
                starterCode: 'word = "mississippi"\n# Count "s" and find first "p"\n',
                expectedOutput: '4\n8',
                hints: ['.count("s") counts occurrences', '.find("p") returns first index, or -1', 'word.count("s") = 4, word.find("p") = 8'],
                xpReward: 75
            },
            {
                id: 'st-12',
                title: 'isdigit, isalpha, isalnum',
                description: 'Print the result of <code>.isdigit()</code>, <code>.isalpha()</code>, <code>.isalnum()</code> for the string <code>"Python3"</code>.',
                starterCode: 'text = "Python3"\n# Check isdigit, isalpha, isalnum\n',
                expectedOutput: 'False\nFalse\nTrue',
                hints: ['.isdigit() checks if all chars are digits', '.isalpha() checks if all chars are letters', '.isalnum() checks if all are letters OR digits'],
                xpReward: 75
            }
        ]
    }
];

// Compute totals
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
