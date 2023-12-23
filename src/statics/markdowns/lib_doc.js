const lib_doc = `
**Code Explanation with Proper Subheadings:**

### 1. **Imports:**
\`\`\`python
import sys
import pandas as pd
import os
import subprocess
import time
import numpy as np
import uvicorn
from fastapi import FastAPI, Request, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
\`\`\`
   - The code starts by importing the necessary libraries and modules for the FastAPI application, data manipulation, subprocess execution, and zero-knowledge proofs.
### 2. **Importing Custom Modules:**
\`\`\`python
try:
    sys.path.append('./zkDist')
    sys.path.append('./zkSort')
    sys.path.append('./zkMaxLabel')
    sys.path.append('./ProofComposition')
    sys.path.append('./utils')

    from minMaxNormalizationAndInteger import minMaxNormalizationAndInteger
    from distance import zkDistance
    from sort import zkSort
    from maxLabel import zkmaxLabel
    from proof_composition import aggregate_proofs

except Exception as e:
    print(e)
\`\`\`
   - Attempts to import custom modules for zero-knowledge proofs (\`minMaxNormalizationAndInteger\`, \`zkDistance\`, \`zkSort\`, \`zkmaxLabel\`, \`aggregate_proofs\`).
   - If there's an exception, it prints an error message.

### 3. **Data Model:**
\`\`\`python
class Item(BaseModel):
    dx: int
    dy: int
\`\`\`
   - Defines a Pydantic data model (\`Item\`) specifying the expected structure of the request payload, containing \`dx\` and \`dy\`.

### 4. **FastAPI Setup:**
\`\`\`python
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
\`\`\`
   - Creates a FastAPI application instance (\`app\`).
   - Adds CORS middleware to allow cross-origin requests.

### 5. **Main Endpoint (\`/\`):**
\`\`\`python
@app.post("/")
def main(req: Item):
    dir_path = os.getcwd()

    df = pd.read_csv('./dataset/train.csv')
    datapoint = [req.dx, req.dy]
    k = 3
    start_time = time.time()
    print(datapoint)

    zkDistProof, distanceWitness = zkDistance(df, datapoint, dir_path, minMaxNormalizationAndInteger)

    zkSortProof, sortWitness = zkSort(distanceWitness, dir_path)

    zkmaxLabelProof, prediction = zkmaxLabel(sortWitness, k, dir_path)

    paths = ['../zkDist', '../zkSort', '../zkMaxLabel']
    final_proof = aggregate_proofs(paths, dir_path)

    end_time = time.time()
    execution_time = (end_time - start_time) * 1000
    print(execution_time)

    return {
        "prediction": prediction,
        "proof": final_proof,
        "execution_time_ms": execution_time
    }
\`\`\`
   - Defines a POST endpoint (\`/\`) to handle incoming requests.
   - Reads a CSV dataset ('train.csv') into a pandas DataFrame (\`df\`).
   - Extracts datapoint coordinates from the request payload.
   - Executes zero-knowledge proofs (\`zkDistance\`, \`zkSort\`, \`zkmaxLabel\`) on the dataset.
   - Aggregates proofs using the \`aggregate_proofs\` function.
   - Measures the execution time and returns the prediction, final proof, and execution time.

### 6. **Verification Endpoint (\`/verify\`):**
\`\`\`python
@app.get("/verify")
def verify():
    dir_path = os.getcwd()
    result = subprocess.run(["zokrates", "verify", "-j", f"{dir_path}/ProofComposition/proof.json", "-v", f"{dir_path}/ProofComposition/verification.key"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    output_lines = result.stdout.split('\n')
    
    verification_status = next((line for line in output_lines if "PASSED" in line), "FAILED")
    return {"verification_status": verification_status}
\`\`\`
   - Defines a GET endpoint (\`/verify\`) for verification purposes.
   - Executes Zokrates' \`verify\` command to verify the proof using the verification key.
   - Returns the verification status.

### 7. **Run the Application:**
\`\`\`python
if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=80)
\`\`\`
   - Runs the FastAPI application using UVicorn on host '0.0.0.0' and port 80.

### 8. **Notes:**
   - Ensure that the necessary directories (\`zkDist\`, \`zkSort\`, \`zkMaxLabel\`, \`ProofComposition\`, \`utils\`) and related modules for zero-knowledge proofs are correctly set up.
   - Handle dataset paths and configurations appropriately.
   - Security relies on the correctness of zero-knowledge proof implementations.
   - Verification of the proof is done through the \`/verify\` endpoint.

`
export default lib_doc;