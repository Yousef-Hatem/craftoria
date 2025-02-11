import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    {
      id: 99455664641,
      customerName: 'Ola Ahmed',
      items: [
        { productName: 'Handmade Necklace', productImage: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRL9EZW3EaBM4wYnFhl0cxV5jxNbwiAN8xFZ-pCTZVlRlhX0HSmtyIWv3Qxtt3I36l2TonY558xoFt1m9BlU9nQc4lP0-PA8LgH-b4ll5q5Wf3gUxjRNKsNZwej&usqp=CAc', quantity: 2, price: 150 },
        { productName: 'Wooden Bracelet', productImage: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnHpOK1mdIPnKL-WdFJf9pKThUCPGp9DDbxUgf7JzsTjtqutAYRD2f8XMIpggXqDXankz4jK6jXhgiWMzv-828UOdz61JD9Z0xTPoRkAfLkd3nDzZhfh20TSLOygUh2mXRXudySg&usqp=CAc', quantity: 1, price: 100 },
      ],
      totalPrice: 400,
      status: 'shipped',
      paymentMethod: 'visa',
      estimatedDeliveryDays: 4,
      shippedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // تم الشحن منذ يومين
    },
    {
      id: 28455634964,

      customerName: 'Ahmed Kotb',
      items: [
        { productName: 'Leather Wallet', productImage: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2qXbg74Uz8HEFqdlYGw9rLI6BljqapFMksOdpt4CDz77P06KqDp0Psm3BS9TB32E21BnPl4BXqUyfWJnoRFGI49Zm-e41va6mEJoZ_yvhQzstNCbEUNJbgmZR4ojb89S-MujipD8yTrc&usqp=CAc', quantity: 1, price: 250 }
      ],
      totalPrice: 250,
      status: 'shipped',
      estimatedDeliveryDays: 2,
      shippedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) ,
      paymentMethod: 'cash'
    },
    {
      id: 994755642641,

      customerName: 'Ahmed Kotb',
      items: [
        { productName: 'Leather Wallet', productImage: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0Yk7oNCYse_RNEmjwlIeTComZPMmhj5jqLb_l_RgjphjCRivjmuOREUcxjFD-sJ0rFhET1IxE64N2VJYs-x0MaZQVjJpKB70GL2drh4GuVOx4O334hG7pkO0_XQkon3EvfmK1zjc&usqp=CAcc', quantity: 1, price: 250 }
      ],
      totalPrice: 250,
      status: 'delivered',
      paymentMethod: 'cash'
    },
    {
      id: 28455649964,

      customerName: 'Ahmed Kotb',
      items: [
        { productName: 'Leather Wallet', productImage: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXtUZT1s46eSahz9yPDPz43ZV8m5WO0qr-ZELBHUat6HF-FGlAYHJz_jpqfQnB8snu-WG3f1mr68y8BsdF1hquZw6uppzUlR5o6xrwj2-n2qJPmzVyCKF7_68fQvGsLTCDqm8iLMM&usqp=CAc', quantity: 1, price: 250 }
      ],
      totalPrice: 250,
      status: 'delivered',
      paymentMethod: 'cash'
    },
    {
      id: 2855545156464,
      customerName: 'Ahmed Kotb',
      items: [
        { productName: 'Leather Wallet', productImage: 'data:image/webp;base64,UklGRqQRAABXRUJQVlA4IJgRAAAwPACdASqOAJMAPl0oj0WjoqEWDH2QOAXEsQBqvRxuPy0/TedJa3855HP8d2S9XeXL0j51fRN5hvPL8wvmk/5f1begZ/UupK/tf/V9hP9kute/sf/SyqRin908FfEr7uzmsVfT5/l+g/1yfV+bHeL8gtQL2R4FuwrtP6BHev/deELqL9/v+f7gH6of9L1G/1ngw/WP9f7AX8z/rn/m/vX5R/Il/6+Uf6l/9f+i+Af+ff4D/o+uB///bv+0n/490f9kkEuyz20tL/K8mt44/4PNCkZVGTghhvpH/501yNFZDDeLBUJDB5C5ZizPRWuA3bBnuKwQLpyqaZh8RX2sF64uTPmRTatNC8LSShXcHbmaNukrtZoBvDuZFfDCxu1ntNCLxM60132OVNuQOjp+dPxeLek1S3kGAVjgjdijI68XKQ2vEIAqhTkv9rB9GXgioDeAo0jx7WokXirj5mpFRxK6bxdWMcRJBPzg/fY1Z5y5uj4ZFeNnInJCPI0WU8S2csYvVKgVGrf9gwcWpDyio+haDqjVRqEGLwvtzUCP2BXF699a4cmTavbkBKGQC7nlXIkoFE5BlLZg+HSzGQSTApMSE+rGlGMvrOnwVek0Gg+vmYe+Mo/AX1npKRLd5YaVndfVt0kpo35YJexgAP79gRi/ZEI/S2kc8dpw4Lib63JrH6lha9PD9taslKjWwjfbUY4X2QdzAnhiXtxYy6JDAJX+EcK3l69oOQpku+iyOEfpfiGMSjhz2qNpLmGzKJpVk0iIhLrl/glWAk+Z5YXeOEsfUwHSSOPiIJglG33H2MtOj4IvwcH4JRQaHFPIYKiRMJnxv4z4QsVTZJxmCQlW/+iIsXbuSXmqzgU+uejU7Bua9236388hUFF7r1DDJhxR18BMGmqScge7L8xel3aVyqGD5D07zwyu14P/B+/Nm3/QSx4JPFBbtmKz+BXhzK7+5pVxOI9CwsxoIX0mCKcxO+wvYazx2VcyNi6FFsrNqmghycK4AkBNHIDHBAMMUaou6rzyUOSDCs6Z1AwEHoJTK0kiWXDxwQhX0sTRTQmJgNSWjt9Z6YNzZrjiLJXs1JTGDJQq7ciSj2syt5QygCiH7Im92hVW7x6AmNFNvo4u7hPRD5RVKPMZm2PrlsHNI140iVViqzfxyL9kqOiN1j0bI7+Vibvf/1dXRXXSX6NAxrKYaF/LCHitKPsPULalN+fHa6MBHL+tg2GHdZW/08UNWhp7ncS0z6vIwKVGH5IWAMGuHiFn1rTgQX9FDUGd+FwKUaLsjlsbdNytqhCrwNzMVcJCFcuDjwVpuoKhya7luIY+qNRuKf4YeYWmuB6AZxFjOv0vzvYK1cm/V9l5G0Nc46qCXeSmBvaRjCw/tQhHmhAgRjTK/91G+Ybd1g3ZgDZcfOkKJUNZR5O9tngCG81ZhTP358RPP02YH5cT6/QNOPSj+bi/QYshskjj/cVik/MwFKgzIkvGx3tgZI9zvo1eNfCCGyAejjyNAqS8KjbPwN8pY1z7hKiO07VGHE627FfHtlrXjoWAaFf0Oy+1BgLks+bdDOUWkKFsldiHuaLshhJVhO4zFuQXHRQPUBteD4LaVWIH0mf8In9CpGb+6DL8ytZTYv7MS/AfLV8tu7GQ4FvF6i/e6d7dKqG/SD0pvX3HLcmUxYdzqnjF5LfC1gBkIeRUqyLqoSVIdmtyl7ZoULwVCTpV999rFeOJ4Wc48nzDGwA+aiaiGbTVeh0HF5m2uISc8lVnwFs965BMm5lCO42ZaUOHuCW1EtP43ZS+aWGfqktE6+CHAzPHRBjNIY1rBvnc/QKaDiZj907+hLZ/aw4s9IjvNb0DHa2oj4xZojEXuMlyJmBpnbYAi1eZnMpoC/iTHkmkk59cMrpQSnFd1MuK3uTKRDqKpSlNqr48txCCChxbox31wqDXiysibxa3UHVbtb9VBCD2jGnvZ4wDXM6sLli9OQcbMGW8doZe8e+I1qfud3Ww0i0KJ7CYAfTa7q8/1LsEFnuAR4eLZ+rlVmzPBFuvd2sF7tWa9W+mv6q1TeNAAqh2ixD7yM+bGfhXW74abF3nLZD+nBXpWnByIjObMYvPdzb5mVC8vOjaSuEUyNIs2l2C5cv/hM6y/wXxCHI/+Ez8+Zum3Uf81Q+gW9IfAlKZQJyjXHINy/oXi3SqwUPSK3WjnQSIzarKlM5YUDAoA6S6//8bub6jbUQmiIBuPzSHi4QeQdyh+lAKaqFXga/kD2f1e3gwVdaH1jjHUVXN+8mj/sIz3xNvK1gzh9vuLzzRyCYfD7Vecdh7HuiUgNNDtoWGHFJg1joOz+XfmZNrqyPEyprd/Oz+pf8RMEnMOgShjgbmn1XcXv3TL7LrpHktPuF+zbUVWi7rDMnRoTg2hY4G9bf1vuW6s3Nz+/19x6d4h4XhhqvTLCAmWWMXuX+nzJdz2/XinWwDeMFjZ4n6lgXY5MeOgybFta8Nhj/1L4C8Zasna9Ttngj3AG8foo3ZkoS5Ycv7UD+mFNlX0q8e1aHsOx2ooTyuHY7Wci9UYJ7D/ilsj+fg1Z7mlhN6QkQ+Oz37R0kk5rS2GxWbBx9Hi34FVdhKc2J/heC92KkBDZ38oCgDq4XKFdnQVmvIwT3gnSm74wGunG5kY2zmUDcTSkaJS7331U+SfW3z3J9a/yk7VCLRVduD9p/4ltN80pU2/lxZ+ZcKyGfH/3wbPqjlSZCeIc4CiL3019mK1K3JTq2bq2dk96mYBnkb8GOitmR/C9R2Z46MwQQvbURaZ7owub+u3ulUz3MSiL0LySvCIgjjSlqxmiT07OGfvteMx2feGhzSU2y4ZNDa75r5X4K7TXP327488EeILtCUR0mchasuiGDLvPjLTTKkWMh7hRKc0jQU00o9CBsZw2WK+YKVogQgW7WuxOgf3HcvcBJI0qMoeGqaX9uHeiClvbuPv8fcVQTDd9FbiXGvFCiwNg8sMZ1hDCcxCXoUFZpNkDDKoj+hTc85NvPwWXN1vhKybwAYjkMKpyEfkJdIS/PZLFPJL+ka7VmHDTdSh2UXUeH+TMb54Gua6jWdmgYAnJ4duXt5wPhbPUSlT4/Hu1T73GWHoqBh+vO2oOwZj6iUh5ya7623ppIvzPBNX14lcYEy+uE1ATEL0RHg41ZR4OE7O5hh2/xrJj5icX/KEFeCdjTPWaQubCe9aIjRliCqzPbp3YWtzzBheuz/8OdGVSp7Vaj9RMS3Gs3u06NZ42E48FxnUWmkjdfJRSVXOkvrsqR9Eyj4qdLhY/D1/G3+nDeO6YC192mrV2gED2iV8VOJEZAxfeNf3n0qKyQOZr3kWCYsJ8vYdH5rfquuKww9tBmhYQgsyo2uFswmBCvNg+mqHxGNeoQ8K0vjdFHONmSAh+U2PpHGVXbpbWQVnixPNrrCwGOppOFKsNZIJv0ov3QN/Vo6IDeaH4auaejmb1jN+VBo5iwGseAiHgs9N0piikAaqsbQaSCEajhaLS9f2/5vEStavZ4+2JozEQJLztiJrf4/BiA1nkkj0f1uV41Txjdc/HaTfV7eyMJ6oLfe85jMcdXLWy0fsw3AbnVbZ1qHesnzK9jkK3uhVgEth2YWse+9Es3DMSWqoIIhUurkFoiWgUAkVngGxaRmamQ1jsQ6CCB/yaN3g7Yq+vrHBl8betyyjRll3W/1BaFWatVEmDMxzH4886yreWHbQVHq0wgNr67PR5plQbKf0dmzNLCVBlfqDMZ9yiCI5q789Z+d1HVE9SbHGdETT8URWs3r2ueZwunNYaFzvsoY1kloWELCDaG02pqUXVE86Fghz5x+GFwbwPmJvAaUEoQ9WdyM1j0kSaFXMvGSPCruyF3w2hUTXZ2XRZPfFLSfNOhN4i+afzhBZaoXw8VD5BTMmMV+Tl4fV1AvvQXwWCqIRyzH1wHPtd0VqF+1iaP7BHWKtWYnLol+Hcl7W6oEMQ4zJUtXYb96GMJcUB/va7hgbzkeoxQuSd6i0COQ3RnxUuVAFWYM4cDk3BZ5UekqLn+UtLV3ISAkMmFIaqmP/sdCzzF8BsJo+emK7QKItzsage0H14BP+J9UNQfCG+ge5ywk008mRX1a+purV9t4s7UEXw2Pi5Z71Iv/eVk3NsKLLH9Qq6I0zPPcU+NVBX+iH714uJPCWsi/P7OaOgpauHS2EJqoLDhpa4eTcaKLE8ClrHuBRV5KCRF1WtLQQg0b3psk/52vWsIgvcYWXH8AbWWV/PZx9RGbyl/2JH+9KXjpAMVIlQe4hui/sgcymhk0yqxCEfEIlTP7LMCzLlfFrSTmzwXf0rKMKWMpqKYzducX3Rq1Z6PEqtVBvF6SxoJjr0iM2fxOO5z5Io3r05c1reLMpDQIvkgm2owQQaE43b/HRkqwfK9w3Lnp4XdtxQpVhRMX2QJDKyGgjFWYtgZIm4gFcu65khdBdhlpyy06a+4vyMznVHc+58W/GwhxvpEZuW2vkrEAwIgOzFhn04gkKuNMCIe08zdDIyp8ZQG+Sz6IrzA9hiZFFmyFcS1sVh1FzNHHL9Wm8XgHdmaTgUpzPFGWEaId6nRtXtnlWFU7Fidknvu8NdfT7NEJkgXwJ6FaCxluEWJVE5vwYGg/xxHnZhyqOoYOkPbPBb6cUgAymLjpTGmxGFSdWNy/36AHiYHm2N3uAmoQfkse1Br1KjCSng0bw3myzY2UfS3ziqPXDDtKFr4nLfkBUFCHH/NfWNQq9pgumPhsoKs7bu95C8ZlcFHVnsNahFMX1RCiNxOvb1ZtSP0DWfEo4Xcdyt0HYGOSqsMJeVmUQaP0MYyCN3tVS9A+U6ie9Ig3ZomsksnmUlrTJ1Aqa7j3Zy3tHrkPGNNXxnREvjGbvNs4YCoOfft95R2BbUCcbQTP+YR3D81LwJYIwMhZgJ3UH3U9HXHDvDshL53pBT4gBDGCMP1G38pv8BYRkCePuHEYmFHZfSATF5A8eX89vwJxjwtLmBuVza4I9pZugXfXlM6cpogNoTZAHy81KYjRiPjk8rUYIAVLE0CcVPpMReMJGCCFBiA5j6WrK7u5XaPBnOcwOUlqHfXnqxGVgGSDDaC37t1hDQg7I815nl7XOi0UOG68Yd+3Q3CNC/NuwPp4WZjSD20LD9caysiekY556VPcc6EZ2H96ez84bhCuJnjD5liw7dQ47I0BPoR1Z2pA+7POlA0vzYdY4f9Btm2qixLsfZFW2562hFCNNHoieTCAqX3WqdFKnQIM0nUSaAdxLRPqy+ro71q5OogrSfIAKTXgH9JuNCR9hz4P+/E1gZ8RcKA9gIeSvpwzMzCuRvUGtVyyGqoLS1iFXC2Qr9zeZWBTSqkzbFeEUUD+0zRW5cA8IEsKprA70ZHwcnHA4ba62cBFEI2p0Pjtq3I4rdwDhZgJZTtt6EAFSDkZSf4ZNIIKx5NR2YyzVo6jG05/S66iqKuVXhUgwWMuBCwWNGRCaSwGzi4schO9r20jlsDd+C+IoIfVN68IPWnIzFV67yybyYMzYq9azUxnt8DzAkA03Dzj8Ez1gbDteGdCp/4yn0kOs45Y5gzl18Qi88J8IV1hM8ijyHjEe+QWnVksQdZx8+3pHKQUrtD7jzMaa+vK2smsjDTxac0E8iHFnmqCmF5vvAIING6K4PdSOcq4JfLObcpvvvoDAtjt9DaZIuTxOqAFw3Sj6rnbV5ueg2IBT0IM2OsDeUYGuPynHr0qJUI6w8sO8h+YMSQysRUfioUVgAN6IuE6/YJSkXJL4ohn277ncjmKJ65/ZNxfj9nxA4APJXqwWvMtwMYvTAadgIabtJK+uWD8OpAyqCwvALhpn9Gd1KhPMDOOvSASen4CJlhUQTDvcnFJQBW5Ov8qZb0O0wDYxSdT36m6XD5qVCBj08jsNLbKjN159tb6QvgPadAczV4BPjyByivSq9k0FbUF3APlGgjnT3dkedloPiarU6GxpnLQM4uUr3H0AHbFUzAl4DREiPfgOjD8SZ968iYqhjtkzOZPpp7s8nbAAAAAAAAA', quantity: 1, price: 250 }
      ],
      totalPrice: 250,
      status: 'cancelled',
      paymentMethod: 'cash'
    },
    {id:12345678,

    customerName: 'Ahmed Kotb',
    items: [
      { productName: 'Leather Wallet', productImage: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2qXbg74Uz8HEFqdlYGw9rLI6BljqapFMksOdpt4CDz77P06KqDp0Psm3BS9TB32E21BnPl4BXqUyfWJnoRFGI49Zm-e41va6mEJoZ_yvhQzstNCbEUNJbgmZR4ojb89S-MujipD8yTrc&usqp=CAc', quantity: 1, price: 250 }
    ],
    totalPrice: 250,
    status: 'shipped',
    estimatedDeliveryDays: 2,
    shippedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) ,
    paymentMethod: 'cash'
  },
  ];

  getOrders(): Order[] {
    return this.orders;
  }

  confirmOrder(orderId: number) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'confirmed';
    }
  }
}
