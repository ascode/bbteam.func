function CheckLoginPageIsInnerPage() {//����½ҳ���Ƿ�����ҳ���������ҳ�����top�е�refresh()�������˷����ڵ�½ҳ��ʹ����ϵ�½��Ŀ��ҳ���е�refresh�����ܾ���½ҳ��Ϊ��ҳ
    try {
        top.refresh();
        alert('��½��ʱ�������µ�½��');
    }
    catch (e) { }
}