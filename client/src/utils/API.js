import axios from "axios";

export default {
    // Gets all expenditures
    getExpenditures: function () {
        return axios.get("/api/expenditures");
    },
    // Gets the expenditure with the given id
    getExpenditureByCycle: function (cycle) {
        return axios.get("/api/expenditures/" + cycle);
    },
    // Deletes the expenditure with the given id
    deleteExpenditures: function (cycle) {
        return axios.delete("/api/expenditures/" + cycle);
    },
    // Saves an expenditure to the database
    saveExpenditure: function (expenditureData) {
        return axios.post("/api/expenditures", expenditureData);
    }
};
