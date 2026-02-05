//data type
//byte
//short
//int
//float
//long
//double
import java.util.*;
class Main{
    public static void main(String[]args)
    {
        //implicit
        short a=4;
        int b=a;
        System.out.println(b);
        float c=a;
        System.out.println(c);
        double d=a;
        System.out.println(d);
        long e=a;
        System.out.println(e);
        
        //explicit
        int A=7;
        short B=(short)A;
        float C=(float)A;
        double D=(double)A;
        System.out.println(B);
        System.out.println(C);
        System.out.println(D);
       
        char G='A';
        System.out.println(G);
        
        int H=(int)G;
        System.out.println(H);
        
        int result=3.0/4;
        
    }
}