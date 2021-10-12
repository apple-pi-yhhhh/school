let time;	//時間

let member;	//人数

let mass_k;	//マス-教室
let mass_s;	//マス-視聴会

let dice;	//サイコロ平均

let time;

let result;	//結果
/*
一人あたりが通るマスの合計 × 人数 ÷ サイコロの平均= かかる時間

time = (mass_k + mass_s) * member / dice
dice = (mass_k + mass_s) * member / time


*/
//「num」に計算したいやつ打ち込む
switch (num){
	case "time" :
		break;
	
	case "member" :
		break;
	
	case "mass_k" :
		break;
	
	case "mass_s" :
		break;
	
	case "dice" :
		break;
	
	default :
		document.write("<h2>予期せぬエラーが発生したお！</h2>")
}
document.write("<h2>"+result+"</h2>")
