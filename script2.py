import random


def triple_number():
    # This function takes an integer 'num' as input and returns its double value.

    # generate a random integer between 1 and 100 (inclusive)
    random_number = random.randint(1, 100)

    # print the random number
    print("Random number from script two")
    print(random_number)

    return 3 * random_number

triple_number()

print("Hello, Python Script #2 Route!")