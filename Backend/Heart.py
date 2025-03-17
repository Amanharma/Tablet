def askFeatures():
    # ask features ->
    # { "age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalch", "exang", "oldpeak", "slope", "ca", "thal" }
    # features in list
    lis = [0] * 13
    
    # age
    print("Enter age: ", end="")
    lis[0] = float(input())
    
    # sex
    print("Enter sex (1 for male, 0 for female): ", end="")
    lis[1] = float(input())
    
    # cp
    print("Enter chest pain type:")
    print("1 for Typical angina")
    print("2 for Atypical angina")
    print("3 for Non-anginal pain")
    print("4 for Asymptomatic")
    lis[2] = float(input())
    
    # trestbps
    print("Enter resting blood pressure: ", end="")
    lis[3] = float(input())
    
    # chol
    print("Enter serum cholesterol: ", end="")
    lis[4] = float(input())
    
    # fbs
    print("Enter fasting blood sugar (> 120 mg/dl) \n(1 for yes, 0 for no): ", end="")
    lis[5] = float(input())
    
    # restecg
    print("Enter resting electrocardiogram results:")
    print("0 for Normal")
    print("1 for LV hypertrophy")
    print("2 for ST-T abnormality")
    lis[6] = float(input())
    
    # thalch
    print("Enter maximum heart rate achieved: ", end="")
    lis[7] = float(input())
    
    # exang
    print("Enter exercise induced angina \n(1 for yes, 0 for no): ", end="")
    lis[8] = float(input())
    
    # oldpeak
    print("Enter ST depression induced by exercise: ", end="")
    lis[9] = float(input())
    
    # slope
    print("Enter slope of the peak exercise ST segment:")
    print("0 for Downslope")
    print("1 for Flat")
    print("2 for Upslope")
    lis[10] = float(input())
    
    # ca
    print("Enter number of major vessels colored by fluoroscopy (0-3): ", end="")
    lis[11] = float(input())
    
    # thal
    print("Enter thalassemia (1-3): ", end="")
    lis[12] = float(input())
    
    return [lis]

def main():
    import pandas as pd
    import pickle
    
    with open('Heart.pkl', 'rb') as f:
        mlp = pickle.load(f)
    
    run = True
    while run:
        details = askFeatures()
        if mlp.predict(details) == [0]:
            print("\n\nMODEL THINKS YOU DON'T HAVE HEART DISEASE\n\n")
        else:
            print("\n\nMODEL THINKS YOU HAVE HEART DISEASE\n\n")
        
        # run = False

if __name__ == "__main__":
    main()