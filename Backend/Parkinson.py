def askFeatures():
    # ask features -> 
    # { "MDVP:Fo(Hz)", "MDVP:Jitter(%)", "MDVP:Shimmer", "MDVP:APQ", "Shimmer:DDA", "NHR" }
    # features in list
    lis = [0] * 6
    
    # MDVP:Fo(Hz)
    print("Enter MDVP:Fo(Hz): ", end="")
    lis[0] = float(input())
    
    # MDVP:Jitter(%)
    print("Enter MDVP:Jitter(%): ", end="")
    lis[1] = float(input())
    
    # MDVP:Shimmer
    print("Enter MDVP:Shimmer: ", end="")
    lis[2] = float(input())
    
    # MDVP:APQ
    print("Enter MDVP:APQ: ", end="")
    lis[3] = float(input())
    
    # Shimmer:DDA
    print("Enter Shimmer:DDA: ", end="")
    lis[4] = float(input())
    
    # NHR
    print("Enter NHR: ", end="")
    lis[5] = float(input())
    
    return [lis]

def main():
    import pandas as pd
    import pickle
    
    with open('Parkinson.pkl', 'rb') as f:
        mlp = pickle.load(f)
    
    run = True
    while run:
        details = askFeatures()
        if mlp.predict(details) == [0]:
            print("\n\nMODEL THINKS YOU DON'T HAVE PARKINSON\n\n")
        else:
            print("\n\nMODEL THINKS YOU HAVE PARKINSON\n\n")
        
        # run = False
        # sample details: [[128.0, 6.5, 0.051, 0.031, 0.005, 0.022]] -> not Parkinson

if __name__ == "__main__":
    main()