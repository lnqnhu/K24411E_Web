function thucHienPhepToan(a,b,pt)
{
    kp=""
    switch(pt)
    {
        case '+':
            kq=(a+b)
            break
        case '-':
            kq=(a-b)
            break
        case '*':
            kq=(a*b)
            break
        case '/':
            kq=(a/b)
            break
        default:
            kq="Lỗi phép toán"
            break
    }
    return kq
}