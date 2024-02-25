const zkSortMD = `#  zkSort

This function sorts an array of data points in a DataFrame. It uses the Zokrates library to validate the sorting in zero-knowledge.
    
   
## Code
 - **Python Code:**

	 - The function zkSort takes two arguments: an array of arguments and a dir_path.
    
	- It first separates the arguments into witnesses and labels.
    
	- It then creates a structured array from the witnesses and labels.
    
	-  The structured array is sorted based on the witnesses.
    
	-  The function then writes the size of the array to a size.zok file, which is used by Zokrates.
	    
	- The function then runs several Zokrates commands to compile the code, set up the proving scheme, compute the witness, and generate the proof.
    
	- The function returns the proof and the sorted array.

 - **Zokrates Code:**
    
	-    The Zokrates code is written in the sortver.zok file. It imports the size of the array from the size.zok file and defines three functions, gt, sorting, and zksort.
    
	- The gt function checks if one number is greater than another.
    
	- The sorting function sorts the array based on the first element of each sub-array.
    
	- The zksort function checks if the array is sorted.
    
	-  The main function sorts the array and checks if the array is sorted.The code includes an assertion to ensure that the sorting is performed correctly. If the assertion fails for any point, then the entire function fails, invalidating the computation. 
	    
## Limitations:
 -   The function assumes that the array contains only numeric data and that the dir_path is valid.
    
-   It also assumes that the Zokrates commands are correctly installed and available in the system path.


## Example Model: 
The function can be used as part of a [KNN classification model](/examples/KNN), as part of a sorting algorithm, where the sorted array is used to sort data points.
`
export default zkSortMD;