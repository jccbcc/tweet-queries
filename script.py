import random


def double_number():
    # This function takes an integer 'num' as input and returns its double value.

    # generate a random integer between 1 and 100 (inclusive)
    random_number = random.randint(1, 100)

    # print the random number
    print("Random number from script one \n")
    print(random_number)

    return 2 * random_number

double_number()

print("Hello, Python Script #1 Route!")
