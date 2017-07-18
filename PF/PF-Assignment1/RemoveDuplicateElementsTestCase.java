package pfsession;



import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class RemoveDuplicateElementsTestCase {

	/*
	 * created single common object for all test cases
	 */
	RemoveDuplicate rd;
	@Before
	public void setUp(){
		rd = new RemoveDuplicate();
	}
	/* positive test
	*
	*/
    @Test
    public void removeDuplicateTest1() {
        int[] input = {2, 5, 4, 6, 3, 8, 5, 9, 3, 3, 6, 3, 9, 0};
        int[] expected={2,5,4,6,3,8,9,0};
        int[] actual_output = rd.removeDuplicate(input);
        Assert.assertArrayEquals(expected, actual_output);
       
    }
    /* negative test
	*
	*/
    @Test
    public void removeDuplicateTest2() {
    int[] input = {2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2};
	int[] expected = {2,2};
	int[] actual_output   = rd.removeDuplicate(input);
	
	Assert.assertArrayEquals(expected, actual_output);
    }
    /*null condition test
	*
	*/
    @Test
    public void removeDuplicateTest3() {
    	int[] input = {};
		int[] expected = {};
		int[] actual_output   = rd.removeDuplicate(input);
		Assert.assertArrayEquals(expected, actual_output);
    }
   
    
}