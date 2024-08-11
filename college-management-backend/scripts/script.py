import os

def create_directory_structure():
    root_dir = "college-management-system"
    
    # Create backend directory and subdirectories
    backend_dir = os.path.join(root_dir, "backend")
    os.makedirs(backend_dir)
    
    backend_subdirs = ["controllers", "models", "routes", "utils"]
    for subdir in backend_subdirs:
        os.makedirs(os.path.join(backend_dir, subdir))
    
    # Create frontend directory and subdirectories
    frontend_dir = os.path.join(root_dir, "frontend")
    os.makedirs(frontend_dir)
    
    frontend_subdirs = ["public", "src"]
    for subdir in frontend_subdirs:
        os.makedirs(os.path.join(frontend_dir, subdir))
    
    # Create components directory inside src
    components_dir = os.path.join(frontend_dir, "src", "components")
    os.makedirs(components_dir)
    
    # Create files inside backend subdirectories
    backend_files = {
        "controllers": ["alumniController.js", "attendanceController.js", "coursesController.js", "departmentController.js", "employeeController.js", "facultyController.js", "managementController.js", "marksController.js", "personController.js", "projectController.js", "projectReviewController.js", "studentController.js"],
        "models": ["alumniModel.js", "attendanceModel.js", "coursesModel.js", "departmentModel.js", "employeeModel.js", "facultyModel.js", "managementModel.js", "marksModel.js", "personModel.js", "projectModel.js", "projectReviewModel.js", "studentModel.js"],
        "routes": ["alumniRoutes.js", "attendanceRoutes.js", "coursesRoutes.js", "departmentRoutes.js", "employeeRoutes.js", "facultyRoutes.js", "managementRoutes.js", "marksRoutes.js", "personRoutes.js", "projectRoutes.js", "projectReviewRoutes.js", "studentRoutes.js"],
        "utils": ["database.js"],
    }
    
    for subdir, files in backend_files.items():
        for file in files:
            with open(os.path.join(backend_dir, subdir, file), "w") as f:
                pass  # Create empty file
    
    # Create files inside frontend src and components directories
    frontend_files = {
        "src": ["App.js", "index.js", "styles.css"],
        "components": ["Alumni.js", "Attendance.js", "Courses.js", "Department.js", "Employee.js", "Faculty.js", "Management.js", "Marks.js", "Person.js", "Project.js", "ProjectReview.js", "Student.js"],
    }
    
    for subdir, files in frontend_files.items():
        for file in files:
            with open(os.path.join(frontend_dir, subdir, file), "w") as f:
                pass  # Create empty file

    # Create files inside frontend public directory
    with open(os.path.join(frontend_dir, "public", "index.html"), "w") as f:
        pass  # Create empty HTML file
    
    # Create package.json files for backend and frontend
    backend_package_json = {
        "name": "backend",
        "version": "1.0.0",
        "description": "Backend for college management system",
        "main": "app.js",
        "scripts": {
            "start": "node app.js"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "dependencies": {
            "express": "^4.17.1",
            "mongoose": "^5.11.18"
        }
    }
    
    frontend_package_json = {
        "name": "frontend",
        "version": "1.0.0",
        "description": "Frontend for college management system",
        "main": "index.js",
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "dependencies": {
            "react": "^17.0.1",
            "react-dom": "^17.0.1",
            "react-scripts": "4.0.3"
        }
    }
    
    with open(os.path.join(backend_dir, "package.json"), "w") as f:
        f.write(str(backend_package_json))
    
    with open(os.path.join(frontend_dir, "package.json"), "w") as f:
        f.write(str(frontend_package_json))
    
    # Create .env files for backend and frontend
    with open(os.path.join(backend_dir, ".env"), "w") as f:
        pass  # Create empty .env file
    
    with open(os.path.join(frontend_dir, ".env"), "w") as f:
        pass  # Create empty .env file

if __name__ == "__main__":
    create_directory_structure()
