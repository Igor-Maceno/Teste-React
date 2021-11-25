var img = document.getElementById("dM");
var i=0;
function darkMode(){
    if(i%2==0){
        document.getElementById("dM").src="img/lightMode.png";
        document.getElementById("behance").src="img/behance2.png";
        document.getElementById("linkedin").src="img/linkedin2.png";
        document.getElementById("github").src="img/github2.png";
        document.getElementById("ideia").src="img/ideia2.png";
        document.getElementById("ti").src="img/ti2.png";
        document.getElementById("wp").src="img/wordpress2.png";
        document.getElementById("style").href="css/style2.css"
        i++;
    }else{
        document.getElementById("dM").src="img/darkMode.png"
        document.getElementById("behance").src="img/icone_behance.png";
        document.getElementById("linkedin").src="img/icone_linkedin.png";
        document.getElementById("github").src="img/icone_github.png";
        document.getElementById("ideia").src="img/ideia.png";
        document.getElementById("ti").src="img/ti.png";
        document.getElementById("wp").src="img/wordpress.png";
        document.getElementById("style").href="css/style.css"
        i++;
    }
}