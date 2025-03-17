
def askFeatures():
    # ask features ->
    # { "mean radius", "mean texture", "mean perimeter", "mean area", "mean smoothness",
    #   "radius error", "texture error", "perimeter error", "worst radius", "worst texture",
    #   "worst perimeter", "mean compactness", "mean concavity", "mean symmetry", "mean fractal dimension" }
    # features in list
    lis = [0] * 15

    # mean radius
    print("\n\nEnter mean radius: ", end="")
    lis[0] = float(input())

    # mean texture
    print("Enter mean texture: ", end="")
    lis[1] = float(input())

    # mean perimeter
    print("Enter mean perimeter: ", end="")
    lis[2] = float(input())

    # mean area
    print("Enter mean area: ", end="")
    lis[3] = float(input())

    # mean smoothness
    print("Enter mean smoothness: ", end="")
    lis[4] = float(input())

    # radius error
    print("Enter radius error: ", end="")
    lis[5] = float(input())

    # texture error
    print("Enter texture error: ", end="")
    lis[6] = float(input())

    # perimeter error
    print("Enter perimeter error: ", end="")
    lis[7] = float(input())

    # worst radius
    print("Enter worst radius: ", end="")
    lis[8] = float(input())

    # worst texture
    print("Enter worst texture: ", end="")
    lis[9] = float(input())

    # worst perimeter
    print("Enter worst perimeter: ", end="")
    lis[10] = float(input())

    # mean compactness
    print("Enter mean compactness: ", end="")
    lis[11] = float(input())

    # mean concavity
    print("Enter mean concavity: ", end="")
    lis[12] = float(input())

    # mean symmetry
    print("Enter mean symmetry: ", end="")
    lis[13] = float(input())

    # mean fractal dimension
    print("Enter mean fractal dimension: ", end="")
    lis[14] = float(input())


    return [lis]

def main():
    import pandas as pd
    import pickle
    import numpy as np

    with open('Asthma.pkl', 'rb') as f:
        mlp = pickle.load(f)

    run = True
    while run:
        details = askFeatures()
        #dd = np.array([17.99,10.38,122.80,1001.0,0.11840,1.0950,0.9053,8.589,25.38,17.33,184.60,0.27760,0.3001,0.2419,0.07871])
        if np.argmax(mlp.predict(np.array(details))) == 0:
            print("\n\nMODEL THINKS YOU DON'T HAVE ASTHMA\n\n")
        else:
            print("\n\nMODEL THINKS YOU HAVE ASTHMA\n\n")

        #run = False
        #test sample:
        #17.99	10.38	122.80	1001.0	0.11840	1.0950	0.9053	8.589	25.38	17.33	184.60	0.27760	0.3001	0.2419	0.07871	-> NO

if __name__ == "__main__":
    main()