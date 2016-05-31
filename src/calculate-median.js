
var arr=[];
function calculate_median(arr)
{
	function  NumAscSort(m,n) //定义小到大排序的方法函数
	{
			 return m-n; 
	}
	
	var arr1=[]; //定义筛选出来的数组
	var num ;
	for(var i=0; i<arr.length; i++)
		{
			if((i%2) != 0) // 说明是第偶数元素，然后将此元素取出来
			{
				arr1.push(arr[i]);//给myarr1数组末尾添加元素
			}
		}
	arr1.sort( NumAscSort());
	
	if(arr1.length % 2 == 0)//说明有偶数个项
	 	{
			var m = arr1[arr1.length/2] ;
			var n = arr1[arr1.length/2 - 1];
			num = (m+n)/2;
				

		}
	else
		{
			num = arr1[(arr1.length-1)/2];
		}
	return num;	
}
calculate_median(arr);

module.exports = calculate_median;
