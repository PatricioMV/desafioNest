import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  productos: Array<Producto>;

  constructor() {
    this.productos = [];
  }
  create(createProductoDto: CreateProductoDto) {
    const prodFix = {
      id: this.productos.length + 1,
      ...createProductoDto,
    };
    this.productos.push(prodFix);
    return prodFix;
  }

  findAll() {
    return this.productos;
  }

  findOne(id: number) {
    const producto = this.productos.find((p) => p.id == id);
    return producto;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    const productoDB = this.findOne(id);
    Object.assign(productoDB, updateProductoDto);
    return productoDB;
  }

  remove(id: number) {
    const productos = this.productos.filter((p) => p.id !== id);
    return productos;
  }
}
