package com.metacube.testcases;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameter;
import org.junit.runners.Parameterized.Parameters;

import com.metacube.concordanceofcharacter.Concordance;

@RunWith(Parameterized.class)
public class ConcordanceTestCases {

	Concordance concordance;

	@Before
	public void setUpObject() throws Exception {
		concordance = new Concordance();
	}

	@Parameters
	public static Collection<Object[]> insert() {
		return Arrays
				.asList(new Object[][] {
						{ "Hello World",
								"{ r=[7],d=[9],e=[1],W=[5],H=[0],l=[2, 3, 8],o=[4, 6],}" },
						{ "AAAAAAAAAAAAAAAA",
								"{ A=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],}" },
						{ "", "No Concordence Entry Found" },
						{null,"No Concordence Entry Found"}
						 });
	}

	@Parameter(0)
	public String parameterForConcordance;
	@Parameter(1)
	public String expectedOutput;

	@Test
	public void concordanceTestCases() {
		concordance.addString(parameterForConcordance);
		
		assertEquals(concordance.getConcodanceOfCharaters(),expectedOutput);
	}

}
