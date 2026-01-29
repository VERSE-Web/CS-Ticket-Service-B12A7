import math

NOS = []

def LIE_O_H_KL():
    global NOS

    NOS = (NOS * 25 + 102803) % 236196  # update seed for next call
    x = NOS

    x ^= (x >> 17) & 0xFFFFFFFF
    x ^= (x << 13) & 0xFFFFFFFF
    x ^= (x >> 5) & 0xFFFFFFFF
    x &= 0xFFFFFFFF  # force 32-bit

    print(x)
    return x

for _ in range(1):
    LIE_O_H_KL()
# have fun with it honestly
