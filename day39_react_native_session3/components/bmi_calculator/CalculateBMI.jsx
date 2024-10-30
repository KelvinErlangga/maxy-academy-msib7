export const calculateBMI = (weight, height, gender) => {
    const heightInMeters = height / 100;
    let bmiValue;
  
    if (gender === "male") {
      bmiValue = weight / (heightInMeters * heightInMeters);
    } else if (gender === "female") {
      bmiValue = (weight / (heightInMeters * heightInMeters)) * 0.95;
    } else {
      bmiValue = weight / (heightInMeters * heightInMeters);
    }
  
    return bmiValue.toFixed(1);
  };
  
  export const getBMICategory = (bmi, gender) => {
    if (gender === "male") {
      if (bmi < 18.5) {
        return "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal";
      } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
      } else {
        return "Obese";
      }
    } else if (gender === "female") {
      if (bmi < 18.0) {
        return "Underweight";
      } else if (bmi >= 18.0 && bmi < 24.0) {
        return "Normal";
      } else if (bmi >= 24.0 && bmi < 29.0) {
        return "Overweight";
      } else {
        return "Obese";
      }
    } else {
      // Default category
      if (bmi < 18.5) {
        return "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal";
      } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
      } else {
        return "Obese";
      }
    }
  };
  