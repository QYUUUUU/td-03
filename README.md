# Project TD-03: Parking Management

**Contributors:**  
- Alexandre CHOPLIN  
- Jonathan ADAM  
- Maé DUGOUA-JACQUES

---

## Installation Guide

### Step 1: Install Dependencies
To install the required dependencies, run the following command:
```bash
bun install
```
### Step 2: Initialize the ORM
Navigate to the prisma directory and apply the database migrations:

```bash
cd src/prisma
npx prisma migrate dev
```
### Step 3: Start the Development Server
Return to the root directory and start the development server:

```bash
cd ../..
bun run dev
```
Once the server is running, open your browser and navigate to: http://localhost:3000