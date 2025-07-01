$(document).ready(function(){
	
	//상단메뉴 배경색 조절 , 휴대폰에서는 배경색 보임
	if($(window).width() <= 600 ){
		$("nav").addClass('act');
	}
	//휴대폰보다 큰 화면일때는 스크롤 높이에 따라 배경색을 조절함
	else {
		const change = $("#top").height()-100;
		$(window).scroll(function(){
			if( $(window).scrollTop() >= change ){
				$("nav").addClass('act');
				$('#Sitelogo').attr('src' , 'images/logo2.png');
			} else {
				$("nav").removeClass('act');
				$('#Sitelogo').attr('src' , 'images/logo1.png');
			}
		});
	}
	
	//타자치는 효과
	const $typing = "I fulfill\n Growing design.";
	//console.log( $typing[7]  );
	const tyLen  = $typing.length;
	//console.log( tyLen ); //21개
	let i = 0;
	let txt = "";
	function type(){
		if( i < tyLen ){
			txt += $typing[i];
			//$("#typing").html(  txt );
			document.querySelector("#typing").innerText = txt;
			i++;
			setTimeout( type, 400);
		}
	}
	type();	
	
	////////////////////////////
	//상단 메뉴 호버 활성화 유지
	$("#menu a").click(function(){
		$(this).addClass('act').siblings().removeClass('act');
	});		
	
	//콘텐츠의 top값을 절대값으로 얻어온다. /상대값은 position().top
	//절대값은 기준이 윈도우 / 상대값은 기준이 부모
	const homeTop = $("body").offset().top;
	const aboutTop = $("#about").offset().top- 300;
	const port1Top = $("#port1").offset().top - 500;
	const port2Top = $("#port2").offset().top - 400;
	const port3Top = $("#port3").offset().top - 400;
	const eventTop = $("#event").offset().top - 400;
	const contactTop=$("#contact").offset().top - 200;
	
	let st = 0;
	let pos = 0;
	//스크롤바를 내렸을때의 효과 (스크롤이벤트 감지!)
	$(window).scroll(function(){
		st = $(window).scrollTop();
		//console.log(st);		
		if(st>= homeTop && st < aboutTop){
			pos = 0;
		}
		if( st>= aboutTop && st<port1Top){
			//About에서 오른쪽 "skill" bar 애니메이션
			$("#Photoshop progress").animate({value : 90});
			$("#Illustrator progress").delay(100).animate({value : 80});
			$("#Premiere progress").delay(100).animate({value : 80});
			$("#AfterEffect progress").delay(100).animate({value : 70});
			$("#Html progress").delay(200).animate({value : 70});
			$("#CSS progress").delay(300).animate({value : 75});
			$("#JQuery progress").delay(300).animate({value : 40});
			$("#Blender progress").delay(300).animate({value : 65});
			$("#Japanese progress").delay(300).animate({value : 60});
			pos = 1;
		}
		if( st>= port1Top ){
			$("#port1").addClass("act");
			pos = 2;
		}
		if( st>= port2Top ){
			$("#port2").addClass("act");			
		}
		if( st>= port3Top ){
			$("#port3").addClass("act");					
		}
		if( st>= eventTop && st<contactTop ){
			pos = 3;
		}
		if( st>= contactTop ){
			pos = 4;
		}
		$("#menu a").eq(pos).addClass('act').siblings().removeClass('act');
	});	
	
	//이벤트이미지를 클릭하면 큰이미지가 나타난다
	$("#event>div>div").click(function(){
		//클릭한 썸네일이미지 주소를 가져온다
		const thumb = $(this).children("img").attr("src");
		//가져온 주소를 큰이미지주소로 변경한다.
		const change = thumb.replace('.', '_big.');
		//변경한 이미지주소를 큰이미지에 대입한다.
		$("#popup img").attr("src" ,  change);		
		
		//클릭한 썸네일이미지에서 alt 값을 가져온다.
		const alt = $(this).children("img").attr("alt");			
		//검정팝업 상단에 작품 제목을 대입한다.
		$("#popup h3").text( alt );		
		$("#popup").fadeIn();
	});
	
	//큰 팝업창 닫기
	$("#popup").click(function(){
		$(this).fadeOut();
	});
	
	


		
});/////////////마지막 부분