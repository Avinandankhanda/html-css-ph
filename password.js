function hasNum(val){
    return /[0-9]/.test(val);
}
function hasLower(val){
    return /[a-z]/.test(val);
}
function hasUpper(val){
    return /[A-Z]/.test(val);
}
function specialcharacter(val){
//     return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(myString);]/.test(val);
// }
$('#pwd').keyup(function(){
    var pval=0;
    var pwd=$('#pwd').val();
	if (pwd.length>=8 && pwd.length<16){
		pval=pval+10;
    }
    else if (pwd.length>=16){
		pval=pval+20;
	}
	if(hasNum(pwd)){
		pval=pval+10;
    }
}