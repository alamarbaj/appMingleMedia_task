const { Employee } = require('../resource/employee.json')

exports.getEmployeeLeads = async (req, res) => {
    try {
        const { employee_id } = req.body
        const employeeDetails = await Employee.find(emp => emp.employee_id == employee_id);
        if (!employeeDetails) {
            // If employee not found, return 404 status
            return res.status(404).json({ error: 'Employee not found' });
        }
        const { employee_lead } = employeeDetails
        console.log(employee_lead)

        return res.status(200).json({ Message: 'Employee Details Fetched', data: employee_lead });

    } catch (error) {
        return res.status(501).json({ error: 'Internal Error : ' + error.message });
    }
}