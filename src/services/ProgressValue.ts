export const progress_value = (progress:number):string => {
    let value = "";
    if (progress > 0 && progress <= 20) {
      value = "ออกแรงไม่เพียงพอ";
    } else if (progress > 20 && progress <= 40) {
      value = "น้อยมาก";
    } else if (progress > 40 && progress <= 60) {
      value = "น้อย";
    } else if (progress > 60 && progress <= 80) {
      value = "ปานกลาง";
    } else if (progress > 80 && progress < 100) {
      value = "มาก";
    } else if (progress === 100) {
      value = "ดีเยี่ยม";
    }else{
      value = "ออกแรงไม่เพียงพอ"
    }
    return value;
  };