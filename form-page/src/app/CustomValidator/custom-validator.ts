import {FormGroup} from '@angular/forms';

export function ConfirmPasswordValidator(passwordControlName:string, confirmPasswordControlName:string){
  return(formGroup:FormGroup)=>{
      const control = formGroup.controls[passwordControlName];
      const matchingControl = formGroup.controls[confirmPasswordControlName];
      
      if(matchingControl.errors && !matchingControl.errors.mustMatch){
        return;
      } 
      
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({mustMatch:true});
      } else {
        matchingControl.setErrors(null);
      }
  }
}