public class Exercise3 {
    /**
     *
     * @param amount price
     * @param type Account status (NotRegistered = 1, SimpleCustomer = 2, ValuableCustomer = 3, MostValuableCustomer = 4)
     * @param years Time in years that the client is our customer
     * @return THE PRICE
     */
    public double calculate(double amount, int type, int years) {
        double discount = (years > 5) ? 0.05 : years / 100.0;
        double result;

        switch (type) {
            case 1:
                // NotRegistered
                return amount;
            case 2:
                // SimpleCustomer
                result = amount - 0.1 * amount;
                return result - discount * result;
            case 3:
                // ValuableCustomer
                result = 0.7 * amount;
                return result - discount * result;
            case 4:
                // MostValuableCustomer
                result = amount - 0.5 * amount;
                return result - discount * result;
            default:
                return amount; // In case of invalid type
        }
    }
}