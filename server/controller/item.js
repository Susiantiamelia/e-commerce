const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Item = require('../models/item.js')

class Items{
  static create(req,res){
    
    Item.create({
      name: req.body.name,
      price: req.body.price,
      desc: req.body.desc,
      category: req.body.category,
      image: req.file.cloudStoragePublicUrl
    })
    .then(item => {
      res.status(200).json(item)
    })
    .catch(error => {
      console.log('error', error);
      
      res.status(500).json(err)
    })
  }

  static all(req,res){
    Item.find({})
    .then(items => {
      res.status(200).json(items)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static category(req,res){
    console.log(req.params.category);
    
    Item.find({category: req.params.category})
    .then(items => {
      res.status(200).json(items)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }

  static milk(req,res){

    Item.find({_id: req.params.id})
    .then(itemData => {
        res.status(200).json({item: itemData})
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
  }

  static update(req,res){
    Item.updateOne({_id: req.params.id},req.body)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })

  }   

  static delete(req,res){
      Item.deleteOne({_id: req.params.id})
      .then(result => {
          res.status(200).json("Account deleted")
      })
      .catch(err => {
          res.status(400).json(err.message)
      })
  }
}

module.exports = Items