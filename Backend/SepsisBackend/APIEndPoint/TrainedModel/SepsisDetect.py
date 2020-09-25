import pickle
import os
# scaler = pickle.load(
#     open(
#         '/home/mufaddal/Mufaddal/Git/Backend/SepsisBackend/APIEndPoint/TrainedModel/scaler.sav',
#         'rb'))
# model = pickle.load(
#     open(
#         '/home/mufaddal/Mufaddal/Git/Backend/SepsisBackend/APIEndPoint/TrainedModel/model.sav',
#         'rb'))

cols = [
    'hr', 'o2sat', 'temp', 'sbp', 'map', 'dbp', 'resp', 'etco2', 'baseexcess',
    'hco3', 'fio2', 'ph', 'paco2', 'sao2', 'ast', 'bun', 'alkalinephos',
    'calcium', 'chloride', 'creatinine', 'bilirubin_direct', 'glucose',
    'lactate', 'magnesium', 'phosphate', 'potassium', 'bilirubin_total',
    'troponini', 'hct', 'hgb', 'ptt', 'wbc', 'fibrinogen', 'platelets', 'age',
    'gender', 'hospadmtime', 'iculos'
]

# print(os.listdir(os.getcwd()))


def processData(inp):
    scaler = pickle.load(open('APIEndPoint/TrainedModel/scaler.sav', 'rb'))
    model = pickle.load(open('APIEndPoint/TrainedModel/model.sav', 'rb'))
    data = []
    for k in cols:
        data.append(inp[k])
    # for k in inp.keys():
    #     print(k, " : ", inp[k])
    # print()
    # for d in data:
    #     print(d)
    # print()
    X = scaler.transform([data])
    y = model.predict_proba(X)[:, 1]

    return y[0]