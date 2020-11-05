
function fileUrlCopy(val) {
	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = val;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
	alert('복사되었습니다.');
}

$(function(){	
	$('.list').each(function(){
		var $wrap = $(this),
			$list = $wrap.find('table'),
			$sel = $wrap.find('.sorting').find('select');

		$sel.on('change',function(){
			var $tx = $(this).val();
			if($tx != 'all'){
				$list.find('tbody tr').each(function(){
					if($(this).children('td').eq(3).text() == $tx) $(this).css('display','');
					else $(this).css('display','none');
				});
			} else {
				$list.find('tr').css('display','');
			}
		});

		// 텍스트 클릭시 index 이동 
		if($(this).data("info")== "project") {
			$(this).find("tr").each(function(){
				var txt = $(this).find("td").eq(1).text(),
				url = $(this).find("td").eq(0).find("> a").attr("href");

				$(this).find("td").eq(1).html("<a href='"+url+"' target='_blank'>"+txt+"</a>")
			})			
		}
	});

});