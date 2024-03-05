const zkApplyWeights = `# ZkApplyWeights

This function involves multiplying a matrix by another matrix (often referred to as a weight matrix in the context of neural networks) and adding a bias vector. The goal of this function is to prove that the operation has been performed correctly without revealing the actual values of the matrices or the bias vector.   
## Code
 - **Python Code:**

	 - Takes as input two matrices (matrix1 and matrix2), a bias vector (bias_b)
	 - Performs a dot product followed by adding the bias. 
	 - The matrices and the result are then converted to lists of strings for JSON serialization. 
	 - The code uses Zokrates to compile, setup, compute the witness, generate the proof, and verify the proof. 
	 - Returns the generated proof and the result of the operation.

 - **Zokrates Code:**
    - The Zokrates code defines the function main that takes private matrices and a bias vector as input, along with a public result matrix. 
	- It initializes a result matrix and performs the matrix multiplication and addition of the bias within the Zokrates environment. 
	- It then asserts that the computed result matches the provided public result matrix, thereby generating a zero-knowledge proof of the correctness of the operation.
	    
## Limitations:

 - The process of generating zero-knowledge proofs can be computationally intensive, especially for large matrices


## Example Model: 
Neural networks, the zkApplyWeights function can be used to prove the correctness of a weight application operation without revealing the weights or the model's internal computations e.g [CNN](/examples/CNN). 
`

export default zkApplyWeights;