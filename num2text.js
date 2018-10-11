function readClass(num) {
	uNames = ["","bir","ikki","uch","to‘rt","besh","olti","yetti","sakkiz","to‘qqiz"];
	dNames = ["","o‘n","yigirma","o‘ttiz","qirq","ellik","oltmish","yetmish","sakson","to‘qson"];
	cNames = ["","yuz","ikki yuz","uch yuz","to‘rt yuz","besh yuz","olti yuz","yetti yuz","sakkiz yuz","to‘qqiz yuz"];
	r = [];
	l = num.length;
	
	if (1 == l) {
		c = 0;
		d = 0;
		u = num[0];
	}
	if (2 == l) {
		c = 0;
		d = num[0];
		u = num[1];
	}
	if (3 == l) {
		c = num[0];
		d = num[1];
		u = num[2];
	}
	
	if (c != "0" && d == "0" && u != "0") {
		r[0] = cNames[+c];
		r[1] = dNames[+d]+"-u";
		r[2] = uNames[+u];
	} else {
		r[0] = cNames[+c];
		r[1] = dNames[+d];
		r[2] = uNames[+u];
	}
	
	return r;
}

function removeZeros(num){
	l = num.length;
	r = num;
	for (i=0;i<l;i++){
		if (num[i] == "0") {
			r = num.slice(i+1);
		} else {
			break;
		}
	}
	return r;
}


function num2text(num){
	num = removeZeros(num);
	l = num.length;
	if (l < 4) {
		b = [];
		m = [];
		t = [];
		o = readClass(num);
		
		r = o.join(" ");
	}
	if (l < 7 && 3 < l) {
		b = [];
		m = [];
		t = readClass(num.slice(0,-3));
		o = readClass(num.slice(-3));
		
		r = t.join(" ")+" ming "+o.join(" ");
	}
	if (l < 10 && 6 < l) {
		b = [];
		m = readClass(num.slice(0,-6));
		t = readClass(num.slice(-6,-3));
		o = readClass(num.slice(-3));
		
		r = m.join(" ")+" million "+t.join(" ")+" ming "+o.join(" ");
	}
	if (l < 13 && 9 < l) {
		b = readClass(num.slice(0,-9));
		m = readClass(num.slice(-9,-6));
		t = readClass(num.slice(-6,-3));
		o = readClass(num.slice(-3));
		
		r = b.join(" ")+" milliard "+m.join(" ")+" million "+t.join(" ")+" ming "+o.join(" ");
	}
	if (12 < l) {
		r = "Siz kiritgan son o‘ta katta";
	}
	
	r = r.trim();
	r = r.replace(/\s+/g, " ");
	r = r.replace(/\s\-u/g, "-u");
	console.log(num);
	console.log(r);
	return r;
}



