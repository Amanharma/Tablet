def askFeatures():
    # ask features ->
    # { "A1_Score", "A2_Score", "A3_Score", "A4_Score", "A5_Score", 
    #   "A6_Score", "A7_Score", "A8_Score", "A9_Score", "A10_Score", 
    #   "Autism", "Result" }
    # features in list
    lis = [0] * 12
    print("\n\nA1_Score to A10_Score\nScore based on Autism Spectrum Quotient (AQ) 10 item screening too\n->\n")
    # A1_Score
    print("Enter A1_Score: ", end="")
    lis[0] = float(input())

    # A2_Score
    print("Enter A2_Score: ", end="")
    lis[1] = float(input())

    # A3_Score
    print("Enter A3_Score: ", end="")
    lis[2] = float(input())

    # A4_Score
    print("Enter A4_Score: ", end="")
    lis[3] = float(input())

    # A5_Score
    print("Enter A5_Score: ", end="")
    lis[4] = float(input())

    # A6_Score
    print("Enter A6_Score: ", end="")
    lis[5] = float(input())

    # A7_Score
    print("Enter A7_Score: ", end="")
    lis[6] = float(input())

    # A8_Score
    print("Enter A8_Score: ", end="")
    lis[7] = float(input())

    # A9_Score
    print("Enter A9_Score: ", end="")
    lis[8] = float(input())

    # A10_Score
    print("Enter A10_Score: ", end="")
    lis[9] = float(input())

    # Autism (Whether an immediate family member has been diagnosed with autism)
    print("Has an immediate family member been diagnosed with autism? (yes/no): ", end="")
    autism = input().lower()
    if autism == "yes":
        lis[10] = 1
    else:
        lis[10] = 0

    # Result (Score for AQ1-10 screening test)
    print("Enter Result (Score for AQ1-10 screening test): ", end="")
    lis[11] = float(input())

    return [lis]

def main():
    import pandas as pd
    import pickle
    import numpy as np

    with open('Autism.pkl', 'rb') as f:
        mlp = pickle.load(f)

    run = True
    while run:
        details = askFeatures()
        if mlp.predict(details) == 0:
            print("\n\nMODEL THINKS YOU DON'T HAVE AUTISM\n\n")
        else:
            print("\n\nMODEL THINKS YOU HAVE AUTISM\n\n")

if __name__ == "__main__":
    main()