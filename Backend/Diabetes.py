
def askFeatures():

    # ask features ->
    # { "Glucose", "BloodPressure", "Insulin", "BMI", "Age" }

    # features in list
    lis = [0] * 6
    # Glucose
    print("Enter Glucose: ", end="")
    lis[0]=float(input())
    # BloodPressure
    print("Enter BloodPressure: ", end="")
    lis[1]=float(input())
    # Insulin
    print("Enter Insulin: ", end="")
    lis[2]=float(input())
    #BMI
    print("Enter BMI(Body Mass Index): ", end="")
    lis[3]=float(input())
    #Age
    print("Enter Age: ", end="")
    lis[4]=float(input())

    return [lis]




def main():
    import pandas as pd
    import pickle
    with open('C:\Minor Project\Backend\Diabetes.pkl', 'rb') as f:
        mlp = pickle.load(f)
    run=True
    while run:
        details = askFeatures()
        if mlp.predict(details) == [0]:
            print("\n\nMODEL THINKS YOU DON'T HAVE DIABETES\n\n")
        else:
            print("\n\nMODEL THINKS YOU HAVE DIABETES\n\n")
        # run=False

    # sample details: [[85, 66,29, 0, 26.6, 31]] -> not diebetes

main()

