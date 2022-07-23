import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>

      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
