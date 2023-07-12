const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
      require: [true, 'please enter a name'],
      unique: true,
      minLength: [3, 'must be 3 Character'],
      maxLength: [100, 'maxLength less then 100 character'],
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      min: [0, "price can't be negative"],
    },
    unit: {
      type: String,
      require: true,
      enum: {
        values: ['kg', 'litter', 'pcs'],
        message: 'unite value cannot be {value} must be kg/litter/pcs',
      },
    },
    quantity: {
      type: Number,
      require: true,
      min: 0,
      validate: {
        validator: (value) => {
          const isInt = Number.isInteger(value);
          if (isInt) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: 'Quantity must be int',
    },
    status: {
      type: String,
      require: true,
      enum: {
        values: ['in-stock', 'out-of-stock', 'discontinued'],
        message:
          'status cannot be {value} , make sure to add in-stock/out-of-stock/discontinued',
      },
    },
    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Supplier"
    // },
    // catagories: [{
    //     name: {
    //         type: String,
    //         require: true
    //     },
    //     _id: mongoose.Schema.Types.ObjectId
    // }]
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
