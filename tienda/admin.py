from django.contrib import admin
from .models import  banner,categoria, producto, cliente, pedido, detallepedido, ImagenProducto, Carrito, ItemCarrito

admin.site.register(banner) 
admin.site.register(categoria)
admin.site.register(producto)
admin.site.register(ImagenProducto)
admin.site.register(cliente)
admin.site.register(pedido)
admin.site.register(detallepedido)
admin.site.register(Carrito)
admin.site.register(ItemCarrito)