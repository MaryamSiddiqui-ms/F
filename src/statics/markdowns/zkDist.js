const zkDistMD = `# ZkDist

This function calculates the distance between a data point and a set of data points in an input.json read from csv file. It uses the Zokrates library to validate the computation in zero-knowledge.
   
## Code
 - **Python Code:**

	 - The function zkDistance takes three arguments: a DataFrame df, a   
	   datapoint, and a dir_path. It first appends -1 to the datapoint and  
	   adds it to the DataFrame df.
	   
	 - Then, it normalizes and integrates the DataFrame. It writes the flattened data to an input JSON file, which is used by Zokrates.
	      
	 - The function then runs several Zokrates commands to compile the code, set up the proving scheme, compute the witness, and generate    the proof.
	      
	 -  The function returns the proof and the witness.

 - **Zokrates Code:**
    

	 - The Zokrates code is written in the distance.zok file.
	   
	- It imports the size of the DataFrame from the size.zok file and defines two functions, square and difference.
	   
	 - The main function calculates the square of the difference between each data point and the test point
	   
	 -  The code includes an assertion to ensure that the distance is correctly computed for each training point. If the assertion fails
	   for any point, then the entire function fails, invalidating the computation.
	    
## Limitations:
    

 - The function assumes that the DataFrame df contains only numeric data
   and that the datapoint and dir_path are valid.
   
 - It also assumes that the Zokrates commands are correctly installed and available in the system path.
   
  - The computations can be done on two data points columns. But code will be updated for more than two columns to make it generic.


## Example Model: 
The function can be used as part of a [KNN classification model](/examples) , where the distance between the test point and the data points is used to classify the test point
`

export default zkDistMD;