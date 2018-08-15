window.onload = function()
{
	var buttons = document.getElementById('Buttons');
	var clear = document.getElementById('clear');
	var answer = document.getElementById('answer');

	Buttons.addEventListener('click', function(e)
		{
			
			if(e.target.nodeName === 'LI')
			{
				var v = e.target.innerHTML;
				if(v === '=')
				{
					//evaluating here
					try{
					answer.innerHTML = eval(answer.innerHTML);
				}
				catch(e)
				{
					answer.innerHTML = e.message;
				}
			}
				else{
				answer.innerHTML+=v;

		}		//console.log('button clicked!');
			}
			//e.target.style.display = 'none';
		});

	  // clear the answer field
  clear.addEventListener('click', function() {
    answer.innerHTML = '';
  });
};