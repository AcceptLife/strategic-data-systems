using System;
using System.Text;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n) => {
            int index,fact=1; 
             for(index=1;index<=n;index++){      
                fact=fact*i;      
             }      
            return fact; 
        };

        public static string FormatSeparators(params string[] items) => {
            StringBuilder sb = new StringBuilder(items[0]);
             for (int index = 1; index < items.Length; index++)
                {
                    if(items.Length - 1 == index){
                        sb.Append(" and "+items[index]); 
                    }
                    else {
                    sb.Append(", "+items[index]); 
                    }
                }
                return sb.ToString();
        };
    }
}